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

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    
    return (
      <nav>
        <div className="nav1">
          <div className="nav2">
            {/* LEFT SIDE */}
            <div className="nav3">
              <img alt="logo" src="./assets/img/logo.ico"/>
  
              {/* RIGHT SIDE */}

              {isAboveMediumScreens ? (
                
                <div className="nav4">
                  <div className="nav5">
                    <Link 
                          page="A Propos" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Carnet de voyage" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Home" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Podcast" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                    <Link 
                          page="Prestations" 
                          selectedPage={selectedPage} 
                          setSelectedPage={setSelectedPage}/>
                  </div>
  
                <div className="nav6">
                  <button>Me contacter</button>
                </div> 
              </div>) : (

                  <ActionButton setSelectedPage={setSelectedPage} className="buttonburger"
                          onClick={() => setIsMenuToggled(!isMenuToggled)}> 

                    <Bars3Icon className="iconburger" />


                  </ActionButton>

                       )}
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;