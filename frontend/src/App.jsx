// frontend\src\App.jsx
import React from 'react'
import NoteDetailPage from './pages/NoteDetailPage'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import { Routes, Route } from "react-router";
import toast from 'react-hot-toast';
 

const App = () => {
  return ( 
    <div>
      <button onClick={() => toast.success("Congrats!")}>Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>  
    </div>
  );
};

export default App
