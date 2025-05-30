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
        <Route path="/" element={<Home/>} />
        <Route path="/administration" element={<Admin/>} />
        <Route path="/reviewer" element={<Reviewer/>} />
        <Route path="/proctor" element={<Proctor/>} />
        <Route path="/backoffice" element={<Backoffice/>} />
        <Route path="/backoffice/exam" element={<BackofficeExam examName={"Demo"}/>} />
        <Route path="/backoffice/session" element={<BackofficeSession/>} />
      </Routes>
    </>
  )
}

export default App
