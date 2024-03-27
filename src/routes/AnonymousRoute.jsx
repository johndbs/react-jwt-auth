import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function AnonymousRoute({ children, redirectPath}) {

    const user = useSelector(state => state.USER.user);

    const location = useLocation();

    const isAnonymous = !user?.token;

    if(isAnonymous){
        return children ? children : <Outlet />;
    }

    return <Navigate to={redirectPath} state={{from: location}} />;
}
