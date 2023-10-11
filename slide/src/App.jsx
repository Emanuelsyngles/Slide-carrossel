import './App.css'

import {Swiper, SwiperSlide} from 'swiper/react'

function App() {

  return (
    <div className="container">
      <h1 className="title">Slider com React JS</h1>

      <Swiper>
        {data.map((item) => (
          <SwiperSlide>
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default App
