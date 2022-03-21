import React, { useState } from 'react';
import './App.css';

const cards = [
  {
    id: 1,
    backgroundImage: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Explore The World'
  },
  {
    id: 2,
    backgroundImage: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Wild Forest'
  },
  {
    id: 3,
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    name: 'Sunny Beach'
  },
  {
    id: 4,
    backgroundImage: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    name: 'City on Winter'
  },
  {
    id: 5,
    backgroundImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Mountains - Clouds'
  }
]

function App() {
  const [isActive, setIsActive] = useState(0);

  const handleClick = index => {
    setIsActive(index)
  }

  return (
    <div>
      <h1 className="text-3xl flex flex-col items-center justify-center">Explore the World</h1>

      <div className="container">
        {cards.map((card, index) => {
          return (
            <div key={index} id={card.id}
              className={`panel ${isActive === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
              onClick={() => handleClick(index)}
            >
              <h3 className="opacity-0 focus:opacity-100 focus:transition-opacity">{card.name}</h3>
            </div>
          )
        })}


      </div>
    </div>
  );
}

export default App;
