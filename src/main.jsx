import React from 'react';
import ReactDOM from 'react-dom';
import { Banner } from './services/Jobposting/banner.jsx';
import Form from '../src/services/Jobposting/form.jsx';
import Jobform2 from './services/Jobposting/jobform2.jsx';
import CustomNavbar from './services/Navbar.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from './services/Jobposting/signin.jsx';
import Thankyou from './services/Jobposting/thankyou.jsx';
import Cards from './services/Jobfeed/smallcard.jsx';
import Cardsdata from './services/Jobfeed/cardsdata.jsx';
import Bigcards from './services/Jobfeed/bigcard.jsx';
import Applynow from './services/Jobfeed/applynow.jsx';
import Uploadresume from './services/Jobfeed/uploadresume.jsx';

function Main() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Cardsdata />} />
          <Route path="/createacc" element={<Form />} />
          <Route path="/postjob" element={<Jobform2 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/jobfeed" element={<Cardsdata />} />
          {/* <Route path="/bigcard" element={<Bigcards />} /> */}
          <Route path="/applynow" element={<Applynow />} />
          <Route path="/uploadresume" element={<Uploadresume />} />
          <Route path="/postbanner" element={<Banner />} />
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));