import "./App.css";
import { useGetUsers } from "./customHook";

function App() {
  const [
    { user, userError, userLoading },
    { post, postError, postLoading },
    { comment, commentError, commentLoading },
  ] = useGetUsers();
  console.log(
    [
      { user, userError, userLoading },
      { post, postError, postLoading },
      { comment, commentError, commentLoading },
    ],
    "usersDataApi"
  );
  return <div className="App">Custom Hooks</div>;
}

export default App;
