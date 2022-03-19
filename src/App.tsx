import { AuthProvider } from "./context/auth";
import { AppRouter } from "./routes";
import { Default } from "./template/default";

function App() {
  return (
    <AuthProvider>
      <Default>
        <AppRouter />
      </Default>
    </AuthProvider>
  );
}

export default App;
