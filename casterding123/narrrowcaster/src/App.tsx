import { useState, useEffect } from 'react'
import './App.css'

interface Slide {
  id: number
  title: string
  subtitle: string
  backgroundImage: string
  description: string
  categories: string[]
  temperature: number
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'European Grand Tour',
    subtitle: 'Europe',
    backgroundImage: '/media/images/frankrijk.jpg',
    description: 'Immerse yourself in rich history, stunning architecture, and world-class cuisine across iconic European cities.',
    categories: ['Historic Landmarks', 'Fine Dining', 'Art Museums'],
    temperature: 18
  },
  {
    id: 2,
    title: 'European Grand Tour',
    subtitle: 'Europe',
    backgroundImage: '/media/images/italie.jpg',
    description: 'Experience the romance of Italian culture, from ancient ruins to Renaissance masterpieces and culinary excellence.',
    categories: ['Historic Landmarks', 'Fine Dining', 'Art Museums'],
    temperature: 22
  },
  {
    id: 3,
    title: 'European Grand Tour',
    subtitle: 'Europe',
    backgroundImage: '/media/images/duitsland.jpg',
    description: 'Discover Germany\'s blend of medieval charm and modern innovation, with breathtaking castles and vibrant cities.',
    categories: ['Historic Landmarks', 'Fine Dining', 'Art Museums'],
    temperature: 16
  },
  {
    id: 4,
    title: 'European Grand Tour',
    subtitle: 'Europe',
    backgroundImage: '/media/images/zwitserland.jpg',
    description: 'Explore Switzerland\'s pristine Alpine landscapes, charming villages, and world-renowned precision and quality.',
    categories: ['Historic Landmarks', 'Fine Dining', 'Art Museums'],
    temperature: 12
  },
  {
    id: 5,
    title: 'European Grand Tour',
    subtitle: 'Europe',
    backgroundImage: '/media/images/oosterijk.jpg',
    description: 'Journey through Austria\'s imperial heritage, from baroque palaces to musical traditions and alpine beauty.',
    categories: ['Historic Landmarks', 'Fine Dining', 'Art Museums'],
    temperature: 14
  }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <div className="slideshow-container">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
      >
        <div className="overlay"></div>
      </div>
      
      <div className="content">
        {/* Top Left - Title and Subtitle */}
        <div className="title-section">
          <h1 className="main-title">{slide.title}</h1>
          <h2 className="subtitle">{slide.subtitle}</h2>
        </div>

        {/* Top Right - Weather Widget */}
        <div className="weather-widget">
          <div className="weather-label">Current Weather</div>
          <div className="weather-temp">{slide.temperature}°C</div>
        </div>

        {/* Bottom Left - Description and Categories */}
        <div className="bottom-left-content">
          <p className="description">{slide.description}</p>
          <div className="category-buttons">
            {slide.categories.map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Right - Pagination */}
        <div className="pagination">
          {currentSlide + 1}/{slides.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`progress-bar-item ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
