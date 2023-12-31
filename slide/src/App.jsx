import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules';

function App() {
const data = [
  { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
  { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
  { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'},
]




  return (
    <div className="container">
      <h1 className="title">Slider com React JS</h1>

      <Swiper
      modules={[EffectFade]}
      effect="fade"
       slidesPerView={1}
       pagination={{clickable: true}}
       navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img 
            src={item.image} 
            alt="slider" 
            className="slide-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default App
