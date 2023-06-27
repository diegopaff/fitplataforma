import './VideoPlay.scss';
import PropTypes from 'prop-types';
import db from '../../../utilities/firebase'
import {useEffect , useState}  from 'react';
import { doc, getDoc } from 'firebase/firestore';

import {useParams} from 'react-router-dom';

const VideoPlay = ({tipo}) => {
    const [partido, setPartido] = useState({});
    const {partidoID} = useParams();
    
    useEffect(() => {
        const itemRef = doc(db, 'BrunoAbbate', partidoID);
        getDoc(itemRef).then((snapshot) => {
          if (snapshot.exists()) {
            setPartido({ id: snapshot.id, ...snapshot.data() });
          }
        });
      }, [partidoID]);

    const partidoUrl = partido.partido;
    const accionesUrl = partido.acciones;

    /* const fecha = partido.date;
    const fechaSi = fecha.toDate();
    const fechaString = 'Jugado ' + fechaSi.getDate() + ' de ' + fechaSi.getMonth() + ' del ' + fechaSi.getYear(); */
    console.log(partido)
   
  return (
    <div className='VideoPlay'>
        <h2 className='section_title'> {tipo == 'partido' ? 'Partido Completo' : 'Acciones'}</h2>
        <iframe className='VideoPlay__player' src={tipo == 'partido' ? partidoUrl : accionesUrl} allow="autoplay" allowFullScreen></iframe>

        <p className='VideoPlay__title'> {partido.local}  {partido.golesLocal}  vs  {partido.golesVisita}  {partido.visita}</p>
    </div>
  )
};

VideoPlay.propTypes = {
  tipo: PropTypes.string

}

export default VideoPlay