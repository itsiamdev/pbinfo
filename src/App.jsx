import Header from './components/Header'
import ProblemsSection from './components/ProblemsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProblemsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
