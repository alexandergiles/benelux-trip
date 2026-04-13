import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { dayTrips } from '../data/trip'
import { base } from '../data/base'

const houseBase = { name: "House base", lat: 50.800, lng: 5.346 };

interface TripMeta {
  dist: string;
  direction: L.Direction;
  offset: [number, number];
  permanent: boolean;
  photo?: string;
}

const tripMeta: Record<string, TripMeta> = {
  "Maastricht":           { dist: "30 min",  direction: "right",  offset: [22, 0],   permanent: false, photo: "photos/maastricht.jpg" },
  "Valkenburg":           { dist: "35 min",  direction: "right",  offset: [22, 0],   permanent: false, photo: "photos/valkenburg.jpg" },
  "Drielandenpunt":       { dist: "45 min",  direction: "right",  offset: [22, 0],   permanent: false, photo: "photos/drielandenpunt.jpg" },
  "Aachen (Germany)":     { dist: "50 min",  direction: "right",  offset: [22, 0],   permanent: false, photo: "photos/aachen.jpg" },
  "Li\u00e8ge (Belgium)": { dist: "40 min",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/maastricht.jpg" },
  "Han-sur-Lesse":        { dist: "1h 15m",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/han-sur-lesse.jpg" },
  "Bokrijk (Belgium)":    { dist: "25 min",  direction: "top",    offset: [0, -22],  permanent: true,  photo: "photos/bokrijk.jpg" },
  "Antwerp (Belgium)":    { dist: "1h 10m",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/antwerp.jpg" },
  "Brussels (Belgium)":   { dist: "1h 10m",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/brussels.jpg" },
  "Cologne (Germany)":    { dist: "1h 40m",  direction: "right",  offset: [22, 0],   permanent: true,  photo: "photos/cologne.jpg" },
};

function createPhotoIcon(photo: string) {
  const size = 36
  return L.divIcon({
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      border:3px solid white;
      box-shadow:0 1px 4px rgba(0,0,0,0.25);
      background:url('${base}${photo}') center/cover no-repeat;
    "></div>`,
  })
}

function createDotIcon(color: string, size: number) {
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

export default function LimburgMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    })

    mapInstance.current = map

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)

    const allPoints: L.LatLngTuple[] = [
      [houseBase.lat, houseBase.lng],
      ...dayTrips.map(d => [d.lat, d.lng] as L.LatLngTuple),
    ]
    map.fitBounds(allPoints, { padding: [50, 50] })

    // House base marker
    L.marker([houseBase.lat, houseBase.lng], { icon: createDotIcon('#0F6E56', 22) })
      .addTo(map)
      .bindTooltip('<strong style="font-size:13px">Flanders</strong>', {
        permanent: true,
        direction: 'right',
        offset: [14, 0],
      })

    // Day trip markers with photo thumbnails
    dayTrips.forEach((d) => {
      if (d.lat === houseBase.lat && d.lng === houseBase.lng) return

      const meta = tripMeta[d.name]
      if (!meta) return
      const { dist, direction, offset, permanent, photo } = meta

      const icon = photo ? createPhotoIcon(photo) : createDotIcon('#6B5E57', 14)
      const marker = L.marker([d.lat, d.lng], { icon })
        .addTo(map)

      const label = `<strong>${d.name}</strong><br/><span style="color:#6B5E57;font-size:11px">${dist}</span>`

      marker.bindTooltip(label, {
        permanent,
        direction,
        offset,
      })

      L.polyline(
        [[houseBase.lat, houseBase.lng], [d.lat, d.lng]],
        { color: '#A7BEAE', weight: 1.5, dashArray: '6 4', opacity: 0.7 }
      ).addTo(map)
    })

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <div className="mt-10 mb-2">
      <h3 className="font-heading text-xl text-ink mb-1">Day trip distances</h3>
      <p className="text-sm text-muted mb-4">All day trips radiate from the house base near Borgloon. Three countries in under two hours.</p>
      <div
        ref={mapRef}
        className="w-full rounded-lg overflow-hidden border border-sand"
        style={{ height: 'clamp(420px, 50vw, 540px)' }}
      />
      <p className="text-xs text-muted mt-2 italic">Drive times approximate. Hover markers for details.</p>
    </div>
  )
}
