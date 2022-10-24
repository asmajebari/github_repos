import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
      <Header />
      <div className="font-roboto flex-grow ">
        <Routes>
          <Route path='/'
            element={<Landing />}
          ></Route>
          <Route path='/:username/repos'
            element={<Profile />}
            ></Route>
     </Routes>
      </div>
        <Footer />
        </div>
   </Router>
  );
}

export default App;


