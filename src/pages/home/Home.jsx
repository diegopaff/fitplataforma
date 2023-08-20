import './Home.scss'
import { useStats } from '../../hooks/useStats'
/* import db from '../../../utilities/firebase'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState, useContext} from 'react';
import { userAuthContext } from '../../context/UserAuthContext'; */

const Home = () => {

  const {getSumAll} = useStats();

 const duelosDefensivos = getSumAll('duelosDefensivos');
 const duelosDefensivosGanados = getSumAll('duelosDefensivosGanados');
  
  return (
    <div className='home-container'>
      <div className='page-container'>
        <h1>Home</h1>
        <div className=''>
        <h3>Duelos Defensivos </h3>
        <p>{duelosDefensivos} / </p>
        <p>{duelosDefensivosGanados}</p>
        </div>
      </div>
        
        <p>{}</p>
    </div>
  )
}

export default Home