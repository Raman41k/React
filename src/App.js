import {Route,Routes} from "react-router-dom";

import {Albums, Comments, Home, Posts, Todos} from "./pages";
import {Navigation} from "./components";

function App() {
  return (
      <div>

          <Navigation/>

          <Routes>

              <Route index element={<Home/>}/>
              <Route path="/todos" element={<Todos/>}/>
              <Route path="/albums" element={<Albums/>}/>
              <Route path="/comments" element={<Comments/>}/>
              <Route path="/posts/:id/comments" element={<Posts/>}/>

          </Routes>

      </div>
  );
}

export default App;