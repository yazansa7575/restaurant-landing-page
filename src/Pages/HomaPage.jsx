import React from 'react'
import Main from '../component/TheMain/Main'
import { Fragment } from 'react'
import NumberCounetr from '../component/NumberCounetr/NumberCounetr'
import Pride from '../component/Pride/Pride'
import PossibleIngredients from '../component/possibleIngredients/possibleIngredients'
import MansStomach from '../component/man\'s stomach/MansStomach'
import ExploreOurFoods from '../component/Explore Our Foods/ExploreOurFoods'
import SliderPer from '../component/SliderPer/SliderPer'
import FAQ from '../component/FAQ/FAQ'
import NavBar from '../component/common/Header/NavBar'
import Footer from '../component/common/Footer/Footer'

const HomaPage = () => {
  return (
    <Fragment>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <Main />
      </div>
      <NumberCounetr />
      <Pride />
      <PossibleIngredients />
      <MansStomach />
      <ExploreOurFoods />
      <SliderPer />
      <FAQ />
      <Footer />
    </Fragment>
  )
}

export default HomaPage