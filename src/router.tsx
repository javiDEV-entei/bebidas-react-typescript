import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
import Layout from './layouts/Layout'
import GenerateAI from './views/GenerateAI'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element= {<IndexPage/>} index/>
            <Route path='/favoritos' element= {<FavoritesPage/>}/>
            <Route path='/generate' element= {<GenerateAI/>}/>
          </Route>
        </Routes>


    </BrowserRouter>
  )
}
