import "./styles.css";

const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div className="mainBox">
      {isLoggedIn ? (
        <div id="bemVindo">
          <h1>Bem-vindo, {user}!</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div id="acessoNegado">
          <h1>Você não pode acessar essa página!</h1>
          <button onClick={Login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;
