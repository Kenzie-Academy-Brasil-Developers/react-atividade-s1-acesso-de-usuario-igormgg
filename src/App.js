import { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const user = "Dev";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          user={user}
          isLoggedIn={isLoggedIn}
          Login={Login}
          Logout={Logout}
        />
      </header>
    </div>
  );
}

export default App;
