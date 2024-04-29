import { HomeIcon } from "./common/components/_atoms";
import { MainLayout } from "./common/components/_organisms";

const App = () => {
  return (
    <MainLayout>
      <h1>App</h1>
      <HomeIcon width={100} height={100} />
    </MainLayout>
  );
};

export default App;
