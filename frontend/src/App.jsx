import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/HomePage';

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
