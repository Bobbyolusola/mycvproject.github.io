import {auth} from "../firebase";
import {AppRoutes} from "./Routes";
import {Navigate} from "react-router-dom";


export const PrivateRoute = ({Component}) => {
    const user = auth?.currentUser
    console.log(user?.uid)
    return user?.uid
    ? <Component />
    : <Navigate to={AppRoutes.notFound} />
}

export const PublicRoute = ({Component}) => {
    const user = auth?.currentUser
    console.log(user?.uid)
    return !user?.uid
        ? <Component />
        : <Navigate to={AppRoutes.home} />
}
