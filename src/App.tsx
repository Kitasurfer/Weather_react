import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { store, persistor } from './store/store';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </PersistGate>
</Provider>
  );
}

export default App;
