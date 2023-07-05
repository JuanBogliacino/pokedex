import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import PokemonPage from './pages/PokemonPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import Footer from './components/Footer'

const AppRouter = () => {
  return (
    <>
    <Footer />

    <Routes>
        <Route path='/pokedex' element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path='/pokedex/pokemon/:id' element={<PokemonPage />} />
            <Route index element={<HomePage />} />
            <Route path='/pokedex/search' element={<SearchPage />} />

            <Route path='*' element={<Navigate to='/' />} />
        </Route>
    </Routes>
    </>
  )
}

export default AppRouter