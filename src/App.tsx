import Navbar from '@/scenes/navbar'
import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import { SelectedPage } from '@/shared/types'
import Accueil from '@/scenes/accueil'


function App() {

  const [selectedPage, setSelectedPage] = useState(SelectedPage.Accueil);
  
  return (
    <>
      <div className='app'>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Accueil selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  )
}

export default App

