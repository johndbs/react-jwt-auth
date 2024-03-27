import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavItem from './NavItem';
import LogoutComponent from './LogoutComponent';

const Navbar = () => {

    const user = useSelector( (store) => store.USER.user);

    const [logged, setLogged] = useState(false);

    useEffect(() => {
      console.log("!!! LOGED change state"+user?.logged);
      setLogged(!!user?.token);
    }, [user]);

  return (
    <nav>
        <ul>
        {logged && (
          <>
            <NavItem to={"/home"} text="Home" />

            <NavItem to={"/hello"} text="Hello" />

            <LogoutComponent />
          </>
        )}

        {!logged && (
          <>
            <NavItem to={"/login"} text="Sing-In" />

            <NavItem to={"/register"} text="Sign-Up" />
          </>
        )}
        </ul>
    </nav>
  )
};

export default Navbar;
