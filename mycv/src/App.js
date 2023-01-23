import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import {AppRoutes} from "./common/Routes";
import {PrivateRoute} from "./common/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";


function App() {
  return (
      <div>
          <BrowserRouter>
              {/*<Header />*/}c
              <Routes>
                  <Route path = {AppRoutes.home} element={<Home />} />
                  <Route path = {AppRoutes.login} element={<Login />} />
                  <Route path = {AppRoutes.profile} element={
                      < PrivateRoute Component={Profile }/>
                  } />
                  <Route path = {AppRoutes.notFound} element={<NotFound />} />

              </Routes>

          </BrowserRouter>

    </div>
  );
}

export default App;
