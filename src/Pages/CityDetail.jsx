import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function CityDetail() {
  const { cityname } = useParams();
  const [data, setData] = useState([]);
  const today = new Date();
  const date = String(today);

  console.log("as", cityname);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname.toLowerCase()}&appid=5ea20c34427b9975a24ca2c9d4b64486&units=metric`
    )
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []);
  console.log(data);

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-slate-900 justify-center py-10 font-sans">
        {typeof data.main != "undefined" && (
          <div className="bg-gradient-to-br from-indigo-600 to-blue-300 rounded-xl p-4 w-80 shadow">
            <div className="p-2 mb-2">
              <div className="text-center">
                <div className="leading-tight text-white">
                  <span className="fa fa-map-marker"></span> {data.name} {""}{" "}
                  {data.sys.country}
                </div>
              </div>
              <div className="text-center mt-1">
                <div className="leading-tight text-gray-300">{date}</div>
              </div>
            </div>
            <div className="p-1 mb-1">
              <div className="flex">
                <div className="flex-1 text-white text-7xl text-center">
                  {Math.floor(data.main.temp)}°
                </div>
              </div>
            </div>
            <div className="p-2 mb-2">
              <div className="text-center">
                <div className="leading-tight text-white text-lg font-bold mb-2">
                  {data.weather.map((city) => (
                    <span key={city.id}>{city.description}</span>
                  ))}
                </div>
                <div className="leading-tight text-white text-lg font-bold">
                  max {Math.floor(data.main.temp_max)}° / min{" "}
                  {Math.floor(data.main.temp_min)}° between hot
                </div>
              </div>
            </div>
            <div className="text-xs text-white mb-1">Today</div>
            <div className="p-2 mb-2 bg-indigo-200 rounded-xl flex bg-opacity-20">
              <div className="flex-1 text-white text-center ">
                <div className="text-xs">Wind Speed {data.wind.speed} </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        <NavLink
          to={"/dashboard"}
          className="p-2 mb-2 bg-gradient-to-br from-indigo-600 to-blue-300 rounded-xl flex bg-opacity-20 text-white mt-2"
        >
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default CityDetail;
