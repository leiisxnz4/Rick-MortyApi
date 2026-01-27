import { useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import {db} from "./data/guitarras"

export default function App() {

  const [guitars, setGuitars] = useState(db)

  return (
    <>
    <Header />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        
        <div className="row mt-5">
          {
            guitars.map(guitar => <Guitar
                                    key= { guitar.id }
                                    nombre= { guitar.nombre }
                                    precio= { guitar.precio }
                                    />)
          }
        </div>
    </main>
    <Footer />
    </>
  )
}