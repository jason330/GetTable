import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/session'
import userIcon from './userLogo.svg'
import './ProfileButton.css'

function ProfileButton( {user} ) {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    
    // const openMenu = () => {
    //     // debugger
    //     if (!showMenu) setShowMenu(true);
    // }

    useEffect( () => {
        if (showMenu) {
            const closeMenu = () => {
                // debugger
                setShowMenu(false)
            }
            document.addEventListener('click', closeMenu )      // QUESTION: is there a way to make event listener exclude the sign out button?
            return () => document.removeEventListener('click', closeMenu )
        }
    }, [showMenu]
    )

    const signOut = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <>
            <button className='profileButton' onClick={ () => setShowMenu(showMenu ? false : true) } >
                <img className="profileIconImage" src={userIcon} alt="user profile button" />
            </button>
            {showMenu &&
            <menu>
                <li>Hello {user.username ? user.username : user.email}!</li>

                <li><a href="/user">My Reservations</a></li>
                <li><button onClick={signOut}>Sign Out</button></li>
            </menu>}
        </>
    )
}

export default ProfileButton