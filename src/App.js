import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WhatsappHacking from './pages/whatsapp-hacking';
import ChatBox from './pages/Chats';
import FacebookHacking from './pages/facebook-hacking';
import InstagramHacking from './pages/instagran-hacking';
import TrackingImei from './pages/tracking-imei';
import TrackingLocation from './pages/tracking-location';
import TrackingSim from './pages/tracking-sim-calls';
import Status from './pages/status';
import Location from './pages/Location';
import CallHistory from './pages/call-history';
import AudioVoices from './pages/audio-voices';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/whatsapp-hacking" element={<WhatsappHacking />} />
          <Route path="/facebook-hacking" element={<FacebookHacking />} />
          <Route path="/instagram-hacking" element={<InstagramHacking />} />
          <Route path="/tracking-imei" element={<TrackingImei />} />
          <Route path="/tracking-location" element={<TrackingLocation />} />
          <Route path="/tracking-sim-call" element={<TrackingSim />} />
          <Route path="/status" element={<Status />} />
          <Route path="/call-history" element={<CallHistory />} />
          <Route path="/audio-voices" element={<AudioVoices />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/location" element={<Location />} />
          <Route path="/chatbox" element={<ChatBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
