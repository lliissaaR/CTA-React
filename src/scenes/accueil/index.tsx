import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import AccueilPageText from '@/assets/img/AccueilPageText.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AccueilPagePhoto from '@/assets/img/AccueilPagePhoto.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const accueil = ({setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id="accueil"
             className="accueil">

        {/* TEXTE ET IMAGE */}
        <div className='accueil2'>
         {/* TEXTE */}
         <div className="boxtext">
            <div className="boxtext2">
                <div>
                    <div>
                        <img alt="accueil-page-text" src={AccueilPageText} />
                    </div>
                </div>
                <p className="texteaccueil">
                    Bienvenue sur le site du Club de Tir - Les Abrets !

                    <br />
                    <br />

                    Venez découvrir un environnement convivial où vous pourrez développer vos compétences de tir et partager votre passion avec d'autres amateurs. 

                    <br />
                    <br />

                    Que vous soyez novice ou tireur expérimenté, notre club vous offre des installations de qualité et des activités variées adaptées à tous les niveaux. 
                </p>
             </div>

            {/* BUTONS */}

            <div className="boutonsaccueil">
                <ActionButton setSelectedPage={setSelectedPage}>Nous rejoindre</ActionButton>
                <AnchorLink className="bouttonaccueil"
                            onClick={() => setSelectedPage(SelectedPage.MeContacter)}
                            href={`#${SelectedPage.MeContacter}`}
                            >
                                <p>Nos Disciplines</p>
                </AnchorLink>
            </div>

         </div>
        
         {/* IMAGE */}
         <div className="divaccueilimg">
            <img alt="AccueilPagePhoto" src={AccueilPagePhoto} className='accueilimg'/>
         </div>
        </div>
    </section>
  )
}

export default accueil