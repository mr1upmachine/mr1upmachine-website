import { Outlet } from 'react-router-dom';

import Footer from './containers/Footer/Footer';
import { useColorTheme } from './hooks/useColorTheme';

function App() {
  const theme = useColorTheme();

  return (
    <div className="tw-flex tw-h-full tw-w-full tw-flex-col" data-theme={theme}>
      <div className="tw-grow tw-bg-1 dark:tw-bg-2">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
