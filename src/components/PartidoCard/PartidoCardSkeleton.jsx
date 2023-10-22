
import './PartidoCardSkeleton.scss'

const PartidoCardSkeleton = () => {
  

    return (
      <div className='PartidoCardSkeleton'>
        <div className='partido__info' >
            <div className='partido__info-details'>
                <div className='icons'>
                    <span className="spanCircle"></span>
                    <span className="spanCircle"></span>
                    <span className="spanCircle"></span>        
                </div>
            </div>
          
            <div className='button_container'>
                <div className='button' ></div>  
            
                <div className='button' ></div>  
            </div>
            
        </div>
      </div>
    )
  };
  

  
  export default PartidoCardSkeleton