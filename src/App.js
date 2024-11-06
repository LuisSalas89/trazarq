import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Carrusel from './components/Carrusel';
import Diseño from './components/Diseño2';
import Diseño2 from './components/Diseño2';
import Dictamen from './components/Dictamen';

import {Routes, Route} from "react-router-dom";

import SliderComponent from '../src/components/SliderComponent'



function App() {
  return (
      <>
      <div className="App">
        <Header></Header>
      </div>

      <Routes>
      <Route
        path="/"
        element={
          <>
            <SliderComponent />
            <Diseño />
          </>
        }
      />
      <Route
        path="/index"
        element={
          <>
            <SliderComponent />
            <Diseño />
          </>
        }
      />
      <Route
        path="/index2"
        element={
          <>
            <Dictamen></Dictamen>
          </>
        }
      />
      </Routes>
      </>
  );
}

export default App;