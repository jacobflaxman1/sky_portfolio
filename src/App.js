import './App.css';
import NavBar from '../src/Modules/NavBar/NavBar.js'
import Hero from "./Modules/Hero/Hero";
import About from "./Modules/About/About";
import Music from './Modules/Music/Music'
import {useEffect, useRef} from "react";


function App() {
    const ref_music = useRef(null)
    const ref_about = useRef(null)
    const ref_hero = useRef(null)

  return (
    <div className="App">
        <NavBar parent_refs={[ref_about, ref_music, ref_hero]}/>
        <Hero ref={ref_hero}/>
        <About ref={ref_about} />
        <Music ref={ref_music} />
    </div>
  );
}

export default App;
