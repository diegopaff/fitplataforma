import './Home.scss'

import StatsCard from '../../components/Statscard/StatsCard';
/* import db from '../../../utilities/firebase'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState, useContext} from 'react';
import { userAuthContext } from '../../context/UserAuthContext'; */

const Home = () => {

  return (
    <div className='home-container'>
      <div className='page-container'>
        <div className='section_title' >
          <p>Bienvenido</p>
          <h1>Estadísticas 2023</h1>
        </div>
        <div className='stats-container'>
          <StatsCard 
            tipo={'duelosDefensivos'}
           />
        </div>
      </div>
        
        <p>{}</p>
    </div>
  )
}

export default Home