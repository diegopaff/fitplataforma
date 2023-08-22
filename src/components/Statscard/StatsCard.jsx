import { useStats } from '../../hooks/useStats'
import './StatsCard.scss'

const StatsCard = ({tipo}) => {
  
  const {getSumAll, getNameItem} = useStats();

  const nombre = getNameItem(tipo);
  const suma = getSumAll(tipo);
  const efectividad = Math.round((suma.ganados / suma.total)*100);
  


  return (
    <div className='StatsCard-container'>
        <h3 className='StatsCard__title'>{nombre}</h3>
        <p className={`StatsCard__efectividad ${efectividad >= 50 ? 'high' : 'low'}`}>{efectividad}%</p>
        <p className='StatsCard__ganados'>{suma.ganados} <span>ganados</span></p>
        <p className='StatsCard__disputados'>{suma.total} <span>total</span></p>

    </div>
  )
}

export default StatsCard