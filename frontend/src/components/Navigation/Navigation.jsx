import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);
    // const dispatch = useDispatch();

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    // };

    const sessionLinks = sessionUser ? (
        <>
            <li>
                <ProfileButton user={sessionUser} />
            </li>
        </>
    ) : (
        <>
            <li>
                <OpenModalButton
                    buttonText="Log In"
                    modalComponent={<LoginFormModal />}
                />
                {/* <NavLink to="/login">Log In</NavLink> */}
            </li>
            <li>
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
        </>
    );

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {isLoaded && sessionLinks}
        </ul>
    )
}

export default Navigation;
