import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { parseJwtTokenExpiration } from "../helpers/TokenHelper";


const AuthVerify = (props) => {

    const user = useSelector(state => state.USER.user);

    const location = useLocation();

    useEffect(() => {
        if(user?.token){
            const exprDate = parseJwtTokenExpiration(user?.token);

            console.log("Expire AT: " + exprDate + " now: " + Date.now());
            if (exprDate < Date.now()) {
              console.log("JWT expired !");
              props.logOut();
            }
        }
    }, [location, props]);

}

export default AuthVerify;
