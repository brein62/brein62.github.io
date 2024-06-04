import './App.css';
import MainWindow from './pages/MainWindow';
import ErrorPage from './pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import Experience from './pages/Experience';
import Awards from './pages/Awards';

/**
 * Main function for personal portfolio site.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="*" element={<ErrorPage error="404 Not Found" errorDesc="The page requested could not be found." />} />
    </Routes>
  );
}

export default App;
