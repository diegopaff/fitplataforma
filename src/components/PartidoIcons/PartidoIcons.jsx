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
            
            <p className={`icon__value ${ value > 0 ? "goles" : "inactivo"}`}>{value}</p>
            <p className={`icon__tipo ${ value > 0 ? "" : "inactivo"}`}>{value == 1 ? 'gol' : 'goles'}</p>
        </div>
        )
    }

    if(tipo == 'asistencias'){
        return (
        <div className='icon-container'>
            <p className={`icon__value ${ value > 0 ? "asistencias" : "inactivo"}`}>{value}</p>
            <p className={`icon__tipo ${ value > 0 ? "" : "inactivo"}`}>asist.</p>
        </div>
        )
    }
}

export default PartidoIcons