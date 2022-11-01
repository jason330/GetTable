import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/session'
import userIcon from './userLogo.svg'

function ProfileButton() {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const loggedInUser = useSelector( state => state.session.user )

    return (
        <>
            <button onClick={ () => setShowMenu(showMenu ? false : true) }>
                <img className="profileButton" src={userIcon} alt="user profile button" />
            </button>
            {showMenu &&
            <menu>
                <li>Hello {loggedInUser.username ? loggedInUser.username : loggedInUser.email}!</li>

                <li><button>My Reservations</button></li>
                <li><button onClick={ () => dispatch(logout())}>Sign Out</button></li>
            </menu>}
        </>
    )
}

export default ProfileButton