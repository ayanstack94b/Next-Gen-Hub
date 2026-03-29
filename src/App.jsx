import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Navbar from './Components/Navbar'

const getModels = async ()=>{
  const res = await fetch('/models.json')
  return res.json();
}

const modelPromise = getModels()

function App() {


  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>

    </>
  )
}

export default App
