import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import GameDetailPage from './pages/GameDetailPage';
import SearchPage from './pages/SearchPage';
import SideNav from './components/SideNav';

function App() {
  return (
    <>
      <SideNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/" element={<GameDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
