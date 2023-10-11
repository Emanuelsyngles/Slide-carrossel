import './App.css'

const data = [
  { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
  {id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
  {id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/'},
]

import {Swiper, SwiperSlide} from 'swiper/react'

function App() {

  return (
    <div className="container">
      <h1 className="title">Slider com React JS</h1>

      <Swiper>
        {data.map((item) => (
          <SwiperSlide>
            <img src={item.image} alt="slider" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default App
