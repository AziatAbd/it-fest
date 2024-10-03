import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div className="appBlock">
      <AuthContextProvider>
        <button></button>
      </AuthContextProvider>
    </div>
  );
};

export default App;
