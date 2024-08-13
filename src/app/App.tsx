import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../widgets/navBar.tsx'
import Home from '../entities/home.tsx'
import NotFound from '../entities/notFound.tsx'
import SignIn from '../feature/registration/SignIn.tsx'
import Registration from '../feature/registration/Registation.tsx'
import SignOut from '../feature/registration/SignOut.tsx'
import AuthProvider from '../shared/context/AuthProvider.js'
import PrivetRoute from '../shared/context/PrivetRoute.js'
import NavLayout from '../shared/layout/NavLayout.js'

const Heroes = lazy(() => import('../entities/ui/heroes.tsx'))
const Locations = lazy(() => import('../entities/ui/locations'))
const Episodies = lazy(() => import('../entities/ui/episodies'))
const HeroCard = lazy(() => import('../shared/ui/pages/heroes/heroCard.tsx'))
const EpisodeCard = lazy(
  () => import('../shared/ui/pages/episode/episodeCard.tsx')
)
const LocationCard = lazy(
  () => import('../shared/ui/pages/location/locationCard.tsx')
)

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
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
            <Route path="*" element={<NotFound />} />.
          </Routes>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
