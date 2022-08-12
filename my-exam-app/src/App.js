import './App.scss';
import { Routes, Route } from "react-router-dom";
import SearchDog from './components/pages/SearchDog';
import Stories from './components/pages/Stories';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <main>
      <Routes>
        <Route path = "/" element={<SearchDog/>} />
        <Route path = "stories" element={<Stories/>} />
        <Route path = "contacts" element={<Contacts/>} />
      </Routes>
    </main>
  );
}

export default App;