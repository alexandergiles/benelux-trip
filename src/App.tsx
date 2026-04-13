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
      <Rentals limburg={limburgRentals} amsterdam={amsterdamRentals} />
      <DayOptions
        id="limburg"
        heading="Borgloon: day options"
        subtitle="5 days at the house. Pick and choose — leave room for pool mornings and unscheduled afternoons."
        options={limburgOptions}
        accentColor="limburg"
        tintColor="limburg-tint"
        columns={3}
        footer="Plus pool/garden days at the house — build in at least two with a 3-year-old."
      >
        <LimburgMap />
      </DayOptions>
      <DayOptions
        id="amsterdam"
        heading="Amsterdam: day options"
        subtitle="3 nights in the city. Mix culture, kid energy, and wandering."
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
