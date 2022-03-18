import { AppRouter } from "./routers/AppRouter";
import { Default } from "./template/default";

function App() {
  return (
    <Default>
      <AppRouter />
    </Default>
  );
}

export default App;
