import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import GameDetailPage from './pages/GameDetailPage';
import LibraryPage from './pages/LibraryPage';
import SearchPage from './pages/SearchPage';
import SideNav from './components/SideNav';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex min-h-screen bg-zinc-800 text-zinc-300">
          <SideNav />
          <div className="mx-5 my-5">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/details/:title" element={<GameDetailPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
