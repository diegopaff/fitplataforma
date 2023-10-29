import { useGetStats } from "./useGetStats";


export const useStats = ()=> {

    const matchesStats = useGetStats();// import data from data context
  
    
    const getSumAll = (propiedad) => {
        const total = matchesStats.reduce((accumulator, object) => {
            return accumulator + object[propiedad];
        }, 0);

    const ganados = matchesStats.reduce((accumulator, object) => {
        return accumulator + object[`${propiedad}Ganados`];
        }, 0);
   
      return {total: total, ganados: ganados}
    }

    const getNameItem = (propiedad) => {
        switch(propiedad){
        case 'duelosDefensivos' :
        return 'Duelos defensivos'
        case 'duelosOfensivos' :
            return 'Duelos ofensivos'
        case 'duelosAereos' :
            return 'Duelos aéreos'
        case 'pasesLaterales' :
            return 'Pases laterales'
        case 'pasesProgresivos':
            return 'Pases progresivos'
        case 'pasesHaciaAtras' :
            return 'Pases hacia atrás'
        case 'minutosJugados' :
            return 'Minutos jugados'
        default :
            return propiedad.charAt(0).toUpperCase() + propiedad.slice(1);
        
        }
    }
  
    const getSumSingle = (propiedad) => {
        const total = matchesStats.reduce((accumulator, object) => {
        return accumulator + object[propiedad];
        }, 0);
        return total
    }

    const getArrayItems = [
        'duelosDefensivos',
        'remates',
        'duelosOfensivos',
        'regate',
        'dueloAereo',
        'pasesLaterales',
        'pasesProgresivos',
        'pasesHaciaAtras'
    ]


  
    return {
        matchesStats,
        getSumAll,
        getNameItem,
        getArrayItems,
        getSumSingle,
        
    }



}