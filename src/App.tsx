import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import { Endpoints } from "@octokit/types";
type listUserReposResponse = Endpoints["GET /users/{username}/repos"]["response"]["data"];

function App() {

  return (
    <Router>
    <div className="App">
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
export type { listUserReposResponse };

