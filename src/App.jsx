import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProblemsSection from './components/ProblemsSection'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProblemsSection />} />
          <Route path="/despre" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
