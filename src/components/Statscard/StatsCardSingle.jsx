import { useStats } from '../../hooks/useStats'
import './StatsCardSingle.scss'

const StatsCardSingle = ({tipo}) => {
  
  const {getSumSingle, getNameItem} = useStats();

  const nombre = getNameItem(tipo);
  const suma = getSumSingle(tipo);
  

  


  return (
    <div className='StatsCardSingle-container'>
        <h3 className='StatsCardSingle__title'>{nombre}</h3>
        <p className='StatsCardSingle__ganados'>{suma}</p>

    </div>
  )
}

export default StatsCardSingle