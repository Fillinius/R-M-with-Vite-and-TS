import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../widgets/navBar.tsx'
import { HomePage } from '../entities/page/HomePage.tsx'
import { NotFoundPage } from '../entities/page/NotFoundPage.tsx'
import { SignIn } from '../feature/registration/SignIn.tsx'
import { Registration } from '../feature/registration/Registation.tsx'
import { SignOut } from '../feature/registration/SignOut.tsx'
import { AuthProvider } from '../shared/context/AuthProvider.js'
import { PrivetRoute } from '../shared/context/PrivetRoute.js'
import { NavLayout } from '../shared/layout/NavLayout.js'

const Heroes = lazy(() =>
  import('../entities/ui/heroes.tsx').then((module) => ({
    default: module.Heroes,
  }))
)
const Locations = lazy(() =>
  import('../entities/ui/locations').then((module) => ({
    default: module.Locations,
  }))
)
const Episodies = lazy(() =>
  import('../entities/ui/episodies').then((module) => ({
    default: module.Episodies,
  }))
)
const HeroCard = lazy(() =>
  import('../shared/ui/pages/heroes/heroCard.tsx').then((module) => ({
    default: module.HeroCard,
  }))
)
const EpisodeCard = lazy(() =>
  import('../shared/ui/pages/episode/episodeCard.tsx').then((module) => ({
    default: module.EpisodeCard,
  }))
)
const LocationCard = lazy(() =>
  import('../shared/ui/pages/location/locationCard.tsx').then((module) => ({
    default: module.LocationCard,
  }))
)

export function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              element={
                <PrivetRoute>
                  <NavLayout />
                </PrivetRoute>
              }
            >
              <Route path="/character">
                <Route index element={<Heroes />} />
                <Route path=":dataId" element={<HeroCard />} />
              </Route>
              <Route path="/location">
                <Route index element={<Locations />} />
                <Route path=":dataId" element={<LocationCard />} />
              </Route>
              <Route path="/episode">
                <Route index element={<Episodies />} />
                <Route path=":dataId" element={<EpisodeCard />} />
              </Route>
            </Route>
            {/* <Route path="/signIn:type?" element={<SignIn />} /> */}
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signIn/registration" element={<Registration />} />
            <Route path="/signOut" element={<SignOut />} />
            <Route path="*" element={<NotFoundPage />} />.
          </Routes>
        </AuthProvider>
      </div>
    </>
  )
}
