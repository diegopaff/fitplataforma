import './Home.scss'

import StatsCard from '../../components/Statscard/StatsCard';

import StatsCardSingle from '../../components/Statscard/StatsCardSingle';
const Home = () => {

  
  return (
    <div className='home-container'>
      <div className='page-container'>
        <div className='section_title' >
          <p>Bienvenido</p>
          <h1>Estadísticas 2023</h1>
        </div>
        <div className='stats-container'>
          <div className='single-container'>
            <StatsCardSingle tipo={'goles'} />
            <StatsCardSingle tipo={'asistencias'} />
          </div>
          <div className='ofensivo-container'>
            <StatsCard tipo={'remates'} />
            <StatsCard tipo={'duelosOfensivos'} />
            <StatsCard tipo={'regates'} />
            <StatsCard tipo={'duelosAereos'} />
            

          </div>
          <div className='defensivo-container'>
            <StatsCard tipo={'duelosDefensivos'} />
          </div>
           
           
           

        </div>
      </div>
        
    </div>
  )
}

export default Home