import React from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css'
import cloudImage from './clouds.png' // 클라우드 이미지를 import 합니다.

function App() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className="clouds">
          <img src={cloudImage} alt="cloud" className="cloud1" />
          <img src={cloudImage} alt="cloud" className="cloud2" />
          <img src={cloudImage} alt="cloud" className="cloud3" />
        </div>
        <animated.div style={fade}>
          <h1>AWS Cloud Clubs Inha</h1>
          <h2>Change Me</h2>
        </animated.div>
      </header>
    </div>
  )
}

export default App
