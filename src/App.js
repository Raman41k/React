import UserForm from "./components/form-user/UserForm";
import Users from "./components/form-user/Users/Users";
import CommentForm from "./components/form-user/CommentForm";
import Comments from "./components/form-user/Comments/Comments";


function App() {
  return (
      <div>
        <UserForm/>
        <Users/>
        <CommentForm/>
          <Comments/>
      </div>
  );
}

export default App;