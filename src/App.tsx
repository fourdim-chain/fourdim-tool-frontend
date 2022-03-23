import ThemeProvider from './theme';
import Router from './routes';

import ThemeColorPresets from "./components/ThemeColorPresets";
import ThemeLocalization from "./components/ThemeLocalization";
import RtlLayout from "./components/RtlLayout";
import NotistackProvider from "./components/NotistackProvider";
import {MotionLazyContainer} from "./components/animate";
import {ProgressBarStyle} from "./components/ProgressBar";
import {ChartStyle} from "./components/chart";
import Settings from "./components/settings";
import ScrollToTop from './components/ScrollToTop';

import './App.css'

function App() {
  return (
      <ThemeProvider>
        <ThemeColorPresets>
          <ThemeLocalization>
              <RtlLayout>
                  <NotistackProvider>
                      <MotionLazyContainer>
                          <ProgressBarStyle />
                          <ChartStyle />
                          <Settings />
                          <ScrollToTop />
                          <Router />
                      </MotionLazyContainer>
                  </NotistackProvider>
              </RtlLayout>
          </ThemeLocalization>
        </ThemeColorPresets>
      </ThemeProvider>
  )
}

export default App
