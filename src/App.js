import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Loading from './components/loading';

import './App.scss';
import './styles/scss/main.scss'

const Home = lazy(() => import("./components/home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
