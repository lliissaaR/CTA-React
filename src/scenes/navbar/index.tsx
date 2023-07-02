import { useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/20/solid"
import Logo from '@/assets/img/logo.jpg'
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"



type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  

    return (
      <nav>
        <div className="nav1">
          <div className="nav2">
            {/* LEFT SIDE */}
            <div className="nav3">
              <img className="logonav" alt="logo" src={Logo}/>
  
              {/* RIGHT SIDE */}

              {isAboveMediumScreens ? (
                
                <div className="nav4">
                  <div className="nav5">
                    <Link 
                          page="Accueil" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Destinations" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Conseils" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Bons plans" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Prestations" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                  </div>
  
                <div className="nav6">
                  <ActionButton setSelectedPage={setSelectedPage} >Me contacter</ActionButton>
                </div> 
              </div>) : (

                  <button className="buttonburger"
                          onClick={() => setIsMenuToggled(!isMenuToggled)}> 

                    <Bars3Icon className="iconburger" />


                  </button>

                       )}
            </div>
          </div>
        </div>

            {/* Menu mobile */}
            {!isAboveMediumScreens && isMenuToggled && (

              <div className="mobilemenucadre">
                {/* ICONE FERMER */}
                <div className="closediv">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="closeicon"/>
                  </button>
                </div>

                {/* MENU */}

                <div className="mobilemenulinks">
                    <Link 
                          page="Accueil" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Destinations" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Conseils" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Bons plans" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Prestations" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                  </div>
              </div>

            )}


      </nav>
    );
  };
  
  export default Navbar;