
import AuthProvider from "./provider/AuthProvider";
import Routes from "./routes";
// import 'daisyui/dist/full.css';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;