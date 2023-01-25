import {auth} from "../firebase";
import {AppRoutes} from "./Routes";
import {Navigate} from "react-router-dom";
import { authUser } from "../Helpers/js-helpers";


export const PrivateRoute = ({Component}) => {
    const user = authUser()
    console.log(user?.uid)
    return user?.uid
    ? <Component />
    : <Navigate to={AppRoutes.notFound} />
}

export const PublicRoute = ({Component}) => {
    const user = authUser()
    console.log(user?.uid)
    return !user?.uid
        ? <Component />
        : <Navigate to={AppRoutes.home} />
}
