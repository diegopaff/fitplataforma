import './UserLogged.scss'
import ProfilePicture from '../../../assets/abbate-perfil.jpg'

const UserLogged = () => {
  return (
    <div className="UserLogged">
      <div className='UserLogged__picture'>
        <img src={ProfilePicture}></img>
      </div>
      <p className='UserLogged__bienvenido'>Bienvenido</p>
      <p className='UserLogged__username'>$Nombre Usuario</p>
    </div>
  )
}

export default UserLogged