import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { bases, dayTrips } from '../data/trip'
import { useFadeIn } from './useFadeIn'

function createIcon(color: string, large: boolean) {
  const size = large ? 20 : 12
  return L.divIcon({
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${color};border:3px solid white;
      box-shadow:0 1px 4px rgba(0,0,0,0.2);
    "></div>`,
  })
}

export default function RouteMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const sectionRef = useFadeIn()

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    })

    mapInstance.current = map

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)

    map.fitBounds([[50.05, 4.5], [52.55, 7.0]], { padding: [20, 20] })

    // Base markers with permanent tooltips
    bases.forEach((b) => {
      L.marker([b.lat, b.lng], { icon: createIcon(b.color, true) })
        .addTo(map)
        .bindTooltip(`<strong>${b.name}</strong><br/><span style="color:#6B5E57;font-size:12px">${b.sub}</span>`, {
          permanent: true,
          direction: 'right',
          offset: [12, 0],
        })
    })

    // Day trip markers with dashed lines to house base
    const houseBase = bases[0] // Borgloon
    dayTrips.forEach((d) => {
      const isBase = bases.some((b) => b.lat === d.lat && b.lng === d.lng)
      if (isBase) return
      L.marker([d.lat, d.lng], { icon: createIcon('#6B5E57', false) })
        .addTo(map)
        .bindTooltip(d.name, { direction: 'top', offset: [0, -8] })

      // Dashed line from house base to day trip
      L.polyline(
        [[houseBase.lat, houseBase.lng], [d.lat, d.lng]],
        { color: '#A7BEAE', weight: 1, dashArray: '4 4', opacity: 0.5 }
      ).addTo(map)
    })

    // Driving route: Burdinne → Brussels → Antwerp (E19) → Rotterdam (A16) → The Hague → Amsterdam
    const driveRoute: L.LatLngTuple[] = [
      [bases[0].lat, bases[0].lng],   // Burdinne
      [50.847, 4.357],                // Brussels
      [51.221, 4.402],                // Antwerp
      [51.588, 4.776],                // Breda (A16 border crossing)
      [51.926, 4.470],                // Rotterdam
      [52.078, 4.310],                // The Hague
      [bases[1].lat, bases[1].lng],   // Amsterdam
    ]
    L.polyline(driveRoute, {
      color: '#B85042', weight: 2.5, dashArray: '8 6', opacity: 0.75,
    }).addTo(map)

    // Car icon roughly mid-route (between Antwerp and Rotterdam)
    const carPos = driveRoute[3]
    L.marker(carPos, {
      icon: L.divIcon({
        className: '',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        html: '<div style="font-size:20px;opacity:0.6;line-height:1">🚗</div>',
      }),
      interactive: false,
    }).addTo(map)

    // Route waypoint labels (small, muted)
    const waypoints: { name: string; lat: number; lng: number; offset: [number, number]; direction: L.Direction }[] = [
      { name: 'Brussels',   lat: 50.847, lng: 4.357, offset: [-6, 0], direction: 'left' },
      { name: 'Antwerp',    lat: 51.221, lng: 4.402, offset: [-6, 0], direction: 'left' },
      { name: 'Rotterdam',  lat: 51.926, lng: 4.470, offset: [-6, 0], direction: 'left' },
      { name: 'The Hague',  lat: 52.078, lng: 4.310, offset: [-6, 0], direction: 'left' },
    ]
    waypoints.forEach((w) => {
      L.marker([w.lat, w.lng], {
        icon: L.divIcon({
          className: '',
          iconSize: [6, 6],
          iconAnchor: [3, 3],
          html: '<div style="width:6px;height:6px;border-radius:50%;background:#B85042;opacity:0.7"></div>',
        }),
        interactive: false,
      })
        .addTo(map)
        .bindTooltip(`<span style="color:#6B5E57;font-size:11px">${w.name}</span>`, {
          permanent: true,
          direction: w.direction,
          offset: w.offset,
          className: 'route-waypoint-label',
        })
    })

    // Flight path into AMS — starts well beyond left map edge to cross full width
    const ams = bases.find((b) => b.name === 'Amsterdam')!
    const mapBounds = map.getBounds()
    const leftLng = mapBounds.getWest() - 1.5
    const flightStart: L.LatLngTuple = [51.2, leftLng]
    const flightEnd: L.LatLngTuple = [ams.lat, ams.lng]
    const steps = 40
    const arcPoints: L.LatLngTuple[] = []
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const lat = flightStart[0] * (1 - t) + flightEnd[0] * t + Math.sin(t * Math.PI) * 0.15
      const lng = flightStart[1] * (1 - t) + flightEnd[1] * t
      arcPoints.push([lat, lng])
    }
    L.polyline(arcPoints, {
      color: '#6B5E57', weight: 1.5, dashArray: '4 6', opacity: 0.5,
    }).addTo(map)

    // Plane icon along the arc
    const planePos = arcPoints[Math.floor(steps * 0.45)]
    L.marker(planePos, {
      icon: L.divIcon({
        className: '',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        html: '<div style="font-size:28px;transform:rotate(75deg);opacity:0.55;line-height:1">✈</div>',
      }),
      interactive: false,
    }).addTo(map)

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <section id="route" ref={sectionRef} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div
        ref={mapRef}
        className="w-full rounded-lg overflow-hidden border border-sand"
        style={{ height: 'clamp(400px, 50vw, 500px)' }}
      />
    </section>
  )
}
