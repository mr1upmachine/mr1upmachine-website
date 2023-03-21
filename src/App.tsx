import { Outlet } from 'react-router-dom';

import Footer from './containers/Footer/Footer';
import { useColorTheme } from './hooks/useColorTheme';

function App() {
  const theme = useColorTheme();

  return (
    <div className="tw-h-full tw-w-full" data-theme={theme}>
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col dark:tw-bg-2">
        <div className="tw-grow">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
