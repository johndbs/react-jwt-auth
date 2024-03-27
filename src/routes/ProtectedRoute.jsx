import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, redirectPath}) {

        const user = useSelector(state => state.USER.user);

        const location = useLocation();

        const allowed = user?.token;

        if (allowed) {
            return children ? children : <Outlet />;
        }

        return <Navigate to={redirectPath} state={{ from: location }} />;
}

