import './App.scss';
import { Routes, Route } from "react-router-dom";
import Main from './components/pages/Main';
import Stories from './components/pages/Stories';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <main>
      <Routes>
        <Route path = "/" element={<Main/>} />
        <Route path = "stories" element={<Stories/>} />
        <Route path = "contacts" element={<Contacts/>} />
      </Routes>
    </main>
  );
}

export default App;
