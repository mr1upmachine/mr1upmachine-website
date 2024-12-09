import { Outlet } from 'react-router';

import Footer from './containers/Footer/Footer';
import { useColorTheme } from './hooks/useColorTheme';
import NightBackground from './components/NightBackground/NightBackground';

function App() {
  const theme = useColorTheme();

  return (
    <>
      <div className="tw-h-full tw-w-full" data-theme={theme}>
        <NightBackground />
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col">
          <div className="tw-grow">
            <Outlet />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
