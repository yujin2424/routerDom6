
import './App.scss';
import Header from './components/Header.js';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Store from './pages/Store.js';
import Scm from './pages/Scm.js';
import CustomerCare from './pages/CustomerCare.js';
import Cooperation from './pages/Cooperation.js';
import Company from './pages/Company.js';
import BookSearch from './pages/BookSearch.js';
import Footer from './components/Footer.js';
import './scss/common.scss';
 
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/store" element={<Store />} />
         <Route path="/scm" element={<Scm />} />
         <Route path="/customercare" element={<CustomerCare />} />
         <Route path="/cooperation" element={<Cooperation />} />
         <Route path="/company" element={<Company />} />
         <Route path="/booksearch" element={<BookSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
