import './PartidoIcons.scss'

const PartidoIcons = ({value, tipo}) => {


    if(tipo == 'minutos'){
        return (
        <div className='icon-container'>
            <p className="icon__value">{value}</p>
            <p className='icon__tipo'>min.</p>
        </div>
        )
    }

    if(tipo == 'goles'){
        return (
        <div className='icon-container'>
            <p className="icon__value">{value}</p>
            <p className='icon__tipo'>{value > 1 ? 'goles' : 'gol'}</p>
        </div>
        )
    }

    if(tipo == 'asistencias'){
        return (
        <div className='icon-container'>
            <p className="icon__value">{value}</p>
            <p className='icon__tipo'>asist.</p>
        </div>
        )
    }
}

export default PartidoIcons