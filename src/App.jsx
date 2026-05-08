import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* navbar */}

        <Navbar />



        <main className="container mt-4">
          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        {/* footer */}
        <Footer />


      </BrowserRouter>
    </>
  )
}

export default App;
