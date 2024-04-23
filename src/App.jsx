import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'
import Tvdetails from './components/Tvdetails'
import Moviedetails from './components/Moviedetails'
import Persondetails from './components/Persondetails'
import Trailer from './components/Trailer'


function App() {

  return (
    <>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/tv" element={<Tvshows />} />
      <Route path="/tv/details/:id" element={<Tvdetails />} >
             <Route path="/tv/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/person" element={<People/>} />
      <Route path="/person/details/:id" element={<Persondetails/>} />
    
  </Routes>
    </>
  )
}

export default App
