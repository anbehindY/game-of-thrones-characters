import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Details from './components/details';
import MenuBar from './components/menuBar';

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
