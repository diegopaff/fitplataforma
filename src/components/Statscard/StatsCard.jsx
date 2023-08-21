import { useStats } from '../../hooks/useStats'


const StatsCard = ({tipo}) => {
  
  const {getSumAll, getNameItem} = useStats();

  const nombre = getNameItem(tipo);
  const suma = getSumAll(tipo);


  return (
    <div>
        <h3>{nombre}</h3>
        <p>{suma.ganados} <span>ganados</span></p>
        <p>{suma.total} <span>disputados</span></p>

    </div>
  )
}

export default StatsCard