import React from 'react'
import ReactDOM from 'react-dom/client'
import Data from './data'
import Card from './components/card'
import Navbar from './components/nav-bar'
import './index.css'

export default function Page() {
  const cards = Data.map(card =>
    <Card
      id={card.id}
      card={card}
    />
  )
  return (
    <div>
      <Navbar />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
