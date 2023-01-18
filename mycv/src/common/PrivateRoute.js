import {auth} from "../firebase";
import {AppRoutes} from "./Routes";
import {Navigate} from "react-router-dom";


export const PrivateRoute = ({Component}) => {
    const user = auth?.currentUser
    return user?.uid
    ? <Component />
    : <Navigate to={AppRoutes.notFound} />
}