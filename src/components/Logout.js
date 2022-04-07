import React, {useContext} from 'react';
import { AuthContext } from '../components/context/AuthContext';
import AuthService from '../components/services/AuthService';


export default function Logout() {
    const {setUser, setIsAuth} = useContext(AuthContext);

    function handleLogout() {
        console.log("..logout")
        AuthService.logout().then(jsonData => {
            if(jsonData.success){
                setUser(jsonData.user);
                setIsAuth(false)
                localStorage.clear('userdetails');

            }
        })
    }

    return (
        <button className="nav-item btn btn-danger" onClick={handleLogout}> Log out </button>
    )
}
