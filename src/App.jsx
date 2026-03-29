import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Navbar from './Components/Navbar'

const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json();
}

const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])
  console.log(carts);
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box w-10/12 mx-auto justify-center bg-transparent">

        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models"
          onClick={() => setActiveTab('model')} defaultChecked />

        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart"
          onClick={() => setActiveTab('cart')} />

      </div>
      {
        activeTab === 'model' ? <Models
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models> : <Cart
            carts={carts}
        ></Cart>
      }




      <Footer></Footer>

    </>
  )
}

export default App
