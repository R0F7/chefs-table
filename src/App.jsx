
import './App.css'
import Header from './components/Header/Header'
import Container from './components/Our_Recipes/Container'
import Slider from './components/Slider/Slider'

function App() {
  
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <Slider></Slider>
        <Container></Container>
      </div>
      <div>
      </div>
    </>
  )
}

export default App


