import {Navigation} from "./components";
import {Route,Routes} from "react-router-dom";
import {Comments, Home, Posts, Users} from "./pages";

function App() {
  return (

      <div>
        <Navigation/>

          <Routes>
              <Route index path={'/'} element={<Home/>}/>
              <Route path={'/users'} element={<Users />}/>
              <Route path={'/posts'} element={<Posts />}/>
              <Route path={'/comments'} element={<Comments />}/>
          </Routes>

      </div>

  );

}

export default App;