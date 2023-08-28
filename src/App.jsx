import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MainLayout from './components/MainLayout';
import { GlobalTheme } from './theme';


function App() {
  return (
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
  );
}

export default App;
