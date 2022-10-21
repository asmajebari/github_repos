import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="font-roboto">
        <Header />
        <Routes>
          <Route path='/'
            element={<Landing />}
          ></Route>
          <Route path='/:username/repos'
            element={<Profile />}
          ></Route>
     </Routes>
   </div>
   </Router>
  );
}

export default App;


