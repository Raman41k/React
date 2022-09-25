import {Route,Routes} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/home/Home";
import Todos from "./pages/todos/Todos";
import Albums from "./pages/albums/Albums";
import Comments from "./pages/comments/Comments";
import Posts from "./pages/posts/Posts";


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