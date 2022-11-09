import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import logo from './circlesLogo.png'
import './Navigation.css'
import ProfileButton from "./ProfileButton";

function Navigation() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    return (
        <nav className="navContainer">
            <div>
                <a className="logo" href="/">
                    <img src={logo} alt="circle logo" />
                    <h2 className="title">GetTable<sup className="superscript">&reg;</sup></h2>
                </a>
            </div>

            <div className="buttonAndMenuContainer">
                {sessionUser &&
                <>
                    <ProfileButton user={sessionUser} />
                    {/* <button onClick={ () => dispatch(logout()) }>Log out</button> */}
                </>
                }

                {!sessionUser &&
                <>
                    <button className="demoUser red" onClick={ () => dispatch(loginUser({email: 'demo@user.io', password: 'password'})) }>Demo User</button>
                    {/* <a href="/signUp">
                        <button className="signUp" >Sign up
                        </button>
                    </a> */}
                    {/* <a href="/signIn"> */}
                    <SignupFormModal />
                    <LoginFormModal />
                    {/* </a> */}
                </>
                }
            </div>
        </nav>
    )
}

export default Navigation