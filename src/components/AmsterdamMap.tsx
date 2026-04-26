import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { amsterdamActivities } from '../data/trip'
import { base } from '../data/base'

const apartmentBase = { name: "Eric Vökel IJ River Suite", lat: 52.3793, lng: 4.9090 };

interface ActivityMeta {
  dist: string;
  direction: L.Direction;
  offset: [number, number];
  permanent: boolean;
  photo?: string;
}

const activityMeta: Record<string, ActivityMeta> = {
  "Canal boat ride":      { dist: "10 min",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/canal-boat.jpg" },
  "Rijksmuseum":          { dist: "15 min",  direction: "bottom", offset: [0, 22],   permanent: true,  photo: "photos/rijksmuseum.jpg" },
  "NEMO Science Museum":  { dist: "5 min",   direction: "right",  offset: [22, 0],   permanent: true,  photo: "photos/nemo.jpg" },
  "Vondelpark":           { dist: "20 min",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/vondelpark.jpg" },
  "Artis Zoo":            { dist: "10 min",  direction: "right",  offset: [22, 0],   permanent: true,  photo: "photos/artis.jpg" },
  "Zaanse Schans":        { dist: "20 min",  direction: "top",    offset: [0, -22],  permanent: true,  photo: "photos/zaanse-schans.jpg" },
  "Pannenkoeken dinner":  { dist: "15 min",  direction: "left",   offset: [-22, 0],  permanent: false, photo: "photos/pancakes.jpg" },
  "Anne Frank House":     { dist: "15 min",  direction: "left",   offset: [-22, 0],  permanent: true,  photo: "photos/anne-frank.jpg" },
  "Aloha bowling":        { dist: "10 min",  direction: "right",  offset: [22, 0],   permanent: true },
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

export default function AmsterdamMap() {
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
      [apartmentBase.lat, apartmentBase.lng],
      ...amsterdamActivities.map(a => [a.lat, a.lng] as L.LatLngTuple),
    ]
    map.fitBounds(allPoints, { padding: [50, 50] })

    L.marker([apartmentBase.lat, apartmentBase.lng], { icon: createDotIcon('#B85042', 22) })
      .addTo(map)
      .bindTooltip('<strong style="font-size:13px">Apartment</strong>', {
        permanent: true,
        direction: 'right',
        offset: [14, 0],
      })

    amsterdamActivities.forEach((a) => {
      const meta = activityMeta[a.name]
      if (!meta) return
      const { dist, direction, offset, permanent, photo } = meta

      const icon = photo ? createPhotoIcon(photo) : createDotIcon('#6B5E57', 14)
      const marker = L.marker([a.lat, a.lng], { icon }).addTo(map)

      const label = `<strong>${a.name}</strong><br/><span style="color:#6B5E57;font-size:11px">${dist}</span>`

      marker.bindTooltip(label, {
        permanent,
        direction,
        offset,
      })

      L.polyline(
        [[apartmentBase.lat, apartmentBase.lng], [a.lat, a.lng]],
        { color: '#E8B5AE', weight: 1.5, dashArray: '6 4', opacity: 0.7 }
      ).addTo(map)
    })

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <div className="mt-10 mb-2">
      <h3 className="font-heading text-xl text-ink mb-1">Activity distances</h3>
      <p className="text-sm text-muted mb-4">All activities radiate from the apartment near Centraal Station. Most are a short tram, bike, or walk away.</p>
      <div
        ref={mapRef}
        className="w-full rounded-lg overflow-hidden border border-sand"
        style={{ height: 'clamp(420px, 50vw, 540px)' }}
      />
      <p className="text-xs text-muted mt-2 italic">Travel times approximate. Hover markers for details.</p>
    </div>
  )
}
