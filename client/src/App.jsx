import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#141516] sm:px-8 px-4 py-4 border-b border-b-[#202123]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" 
      className="font-bold font-open-sans font-medium bg-gradient-to-r from-[#29DC75] to-[#6FBDF9] 
      text-[#161718] px-4 py-2 rounded-md uppercase 
      hover:shadow-primaryButton ">
        Create Now
        </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#191A1C] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="w-full bg-[#191A1C] border-t border-t-[#202123] px-4 py-4 text-center text-[#737483] text-sm uppercase">
    <a href="https://imayden.com/" target="_blank">ABOUT US</a>｜
    <a href="https://www.linkedin.com/in/yiming-deng-1b06a2228/" target="_blank" >LinkedIn</a>｜
    <a href="https://github.com/imayden" target="_blank" >Github</a>｜
    <a href="mailto:ayden.yiming.deng@gmail.com" target="_blank" >E-Mail</a> 
      <br/>
      ©2023 <a href="https://imayden.com/" target="_blank">&lt;I/M&gt;AYDEN</a> . ALL RIGHTS RESERVED.
    </footer>
  </BrowserRouter>
);

export default App;
