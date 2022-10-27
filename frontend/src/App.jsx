import axios from "axios";
import React from "react";

const baseURL = window.location.href + "api/WeatherForecast";

export default function App() {
  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDatas(response.data);
    });
  }, []);

  if (!datas) return null;

  return (
    <div className="app">
      <div className="add-post-container">
        {datas.map (data =>  
          <div className="data-card" key={data.temperatureC}>
            <h1>{data.summary}</h1>
            <p>{data.temperatureC} C</p>
            <p>{data.temperatureF} F</p>
          </div>
      )}
      </div>
    </div>
  );
}