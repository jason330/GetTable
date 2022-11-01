import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import logo from './opentable-logo-153e80.svg'
import './Navigation.css'
import ProfileButton from "./ProfileButton";

function Navigation() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    return (
        <nav className="navContainer">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>

            <div className="buttonContainer">
                {sessionUser &&
                <>
                    <ProfileButton/>
                    <button onClick={ () => dispatch(logout()) }>Log out</button>
                </>
                }

                {!sessionUser &&
                <>
                    <a href="/signUp">Sign up</a>
                    <a href="/signIn">Sign in</a>
                </>
                }
            </div>
        </nav>
    )
}

export default Navigation