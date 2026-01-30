import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import {db} from "./data/guitarras"

export default function App() {

  const cartInStorage = localStorage.getItem('cart')
  const initialCart = cartInStorage ? JSON.parse(cartInStorage) : []

  const [guitars, setGuitars] = useState(db)
  const [cart, setCart] = useState(initialCart)

  const addGuitar = (guitar) => {
    console.log('Recibe Guitar', guitar.nombre)
    const idExist = cart.findIndex(g => g.id === guitar.id)
    if(idExist === -1) {
      const newCart = [...cart,{
        ...guitar,
        cantidad:1 
      }]
      setCart(newCart)
    } else {
      const newCart = [...cart]
      newCart[idExist].cantidad ++
      setCart(newCart)
    }
  }

  const removeGuitar = (id) => {
    const newCart = cart.filter(g => g.id !== id)
    setCart(newCart)
  }

  const addOne = (id) => {
    const idxGuitar = cart.findIndex(g => g.id === id);
    const newCart = [...cart];

    if (newCart[idxGuitar].cantidad < 10) {   
      // máximo 10
      newCart[idxGuitar].cantidad++;
      setCart(newCart);
    }
  };

  const subsOne = (id) => {
    const idxGuitar = cart.findIndex(g => g.id === id);
    const newCart = [...cart];
    // mínimo 1
    if (newCart[idxGuitar].cantidad > 1) {
      newCart[idxGuitar].cantidad--;
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([])
  }

  const guitar3 = guitars[3];  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
    <Header 
      cart={ cart }
      addGuitar={ addGuitar }
      removeGuitar={ removeGuitar }
      addOne={ addOne }
      subsOne={ subsOne }
      clearCart={ clearCart }
      guitar3={ guitar3 }   
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {
            guitars.map(guitar => (
              <Guitar
                key={ guitar.id }
                addGuitar={ addGuitar }
                guitar={ guitar }
              />
            ))
          }
        </div>
    </main>
    <Footer />
    </>
  )
}