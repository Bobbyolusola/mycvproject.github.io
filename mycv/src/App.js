import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import {AppRoutes} from "./commom/Routes";


function App() {
  return (
      <div>
          <BrowserRouter>
              {/*<Header />*/}
              <Routes>
                  <Route path = {AppRoutes.home} element={<Home />} />

              </Routes>

          </BrowserRouter>

    </div>
  );
}

export default App;
