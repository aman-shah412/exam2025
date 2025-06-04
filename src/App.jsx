import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Reviewer from './components/Reviewer';
import Proctor from './components/Proctor';
import Backoffice from './components/Backoffice';
import BackofficeExam from './components/BackofficeExam';
import BackofficeSession from './components/BackofficeSession';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/administration" element={<Admin />} ></Route>
        <Route path="/reviewer" element={<Reviewer />} ></Route>
        <Route path="/proctor" element={<Proctor />} ></Route>
        <Route path="/backoffice" element={<Backoffice />} ></Route>
        <Route path="/backoffice/exam" element={<BackofficeExam examName={"Demo"} />} ></Route>
        <Route path="/backoffice/session" element={<BackofficeSession />} ></Route>
      </Routes>
    </>
  )
}

export default App
