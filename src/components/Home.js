import React from 'react'
import { Header } from './Header'
import Slider from './Slider'
import  {Boxes}  from './Boxes'
import { BestSeller } from './BestSeller'
import {BestHeading} from './BestHeading'
import { GemCat } from './GemCat'

export const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Boxes />
      <BestHeading />
      <BestSeller />
      <GemCat />
    </div>
  );
}
