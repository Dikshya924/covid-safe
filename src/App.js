import React,{useState,useEffect} from 'react';

import './App.css';
import Home from './Home'
import Info from "./Info"
import InfoBox from './InfoBox';



function App() {
  const [countryInfo,setCountryInfo]=useState({})

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  return (
<div>
    <Home/>
    <div className="app__stats">
        {/* info boxes */}
        <h2 className="stats__h2">WorldWide Live<br/> Update Tracker</h2>
        <InfoBox title="Corona Virus Cases"  total={countryInfo.cases} />
        <InfoBox title="Recovery"  total={countryInfo.recovered}/>
        <InfoBox title="Deaths"  total={countryInfo.deaths}/>


      </div>
    <Info/>
    
      
    </div>
    
  );
}

export default App;
