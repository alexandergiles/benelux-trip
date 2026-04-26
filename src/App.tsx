import Nav from './components/Nav'
import Hero from './components/Hero'
import RouteMap from './components/RouteMap'
import DayOptions from './components/DayOptions'
import LimburgMap from './components/LimburgMap'
import Rentals from './components/Rentals'
import NextSteps from './components/NextSteps'
import {
  limburgOptions,
  amsterdamOptions,
  limburgRentals,
  amsterdamRentals,
  nextSteps,
} from './data/trip'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <RouteMap />
      <Rentals
        id="rentals-flanders"
        heading="Burdinne: June 22–26"
        rentals={limburgRentals}
        photo="photos/rental-burdinne.jpg"
        photoAlt="Refuge du Saule — Burdinne, Wallonie, Belgium"
        tint="limburg-tint"
        accent="limburg"
        label="The house"
      />
      <DayOptions
        id="limburg"
        heading="Wallonie: day options"
        subtitle="Pick ~4, decide game-time based on vibes / weather"
        options={limburgOptions}
        accentColor="limburg"
        tintColor="limburg-tint"
        columns={3}
        footer="Plus pool / garden days from the house"
      >
        <LimburgMap />
      </DayOptions>
      <Rentals
        id="rentals-amsterdam"
        heading="Amsterdam: June 26–30"
        rentals={amsterdamRentals}
        photo="photos/rental-amsterdam.avif"
        photoAlt="Eric Vökel IJ River Suite — Amsterdam"
        tint="coral-tint"
        accent="coral"
        label="The apartment"
      />
      <DayOptions
        id="amsterdam"
        heading="Amsterdam: day options"
        subtitle=""
        options={amsterdamOptions}
        accentColor="coral"
        tintColor="coral-tint"
        columns={4}
        footer="Neighborhoods to wander: Jordaan (canals + cafés), De Pijp (Albert Cuyp market), Oost (leafy, local)."
      />
      <NextSteps steps={nextSteps} />
    </div>
  )
}

export default App
