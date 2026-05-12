import './Features.css'

const features = [
  {
    id: 1,
    icon: '⚛️',
    title: 'React 19',
    description: 'Built with the latest React features including powerful hooks and concurrent rendering.'
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Powered by Vite for instant hot module replacement and optimized builds.'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Responsive Design',
    description: 'Fully responsive layout that works perfectly on all devices and screen sizes.'
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Modern Styling',
    description: 'Clean and maintainable CSS with modern features like CSS Grid and Flexbox.'
  }
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us?</h2>
        <p className="features-subtitle">Discover the benefits of our modern web solution</p>
        <div className="features-grid">
          {features.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
