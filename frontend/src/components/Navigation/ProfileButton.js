import { useState } from 'react'
import userIcon from './userLogo.svg'

function ProfileButton() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <button onClick={ () => setShowMenu(showMenu ? false : true) }>
                <img className="profileButton" src={userIcon} alt="user profile button" />
            </button>
            <div>
                
            </div>
        </>
    )
}

export default ProfileButton