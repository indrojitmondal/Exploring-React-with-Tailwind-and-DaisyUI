import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  const [count, setCount] = useState(0);

  const [isActive, setIsActive] = useState({
    cart: false,
    status: 'active'
  });
  // console.log(isActive);
  const handleIsActive= status=>{

    if(status==='cart'){
      setIsActive({
        cart: true,
        status: 'cart'
      })
    

    }
    else {
      setIsActive({
        cart: false,
        status: 'about'
      })

    }

    
  }

  return (
    <>
        <header className='max-w-7xl mx-auto pt-4'>

           <Navbar></Navbar>

                
        </header>

        <main className='flex justify-between max-w-7xl mx-auto pt-4'>

          <AllProducts></AllProducts>
          <CartContainer 
           handleIsActive={handleIsActive}
           isActive={isActive}

           ></CartContainer>

        </main>
       
       
    </>
  )
}

export default App
