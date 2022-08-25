import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function CityDetail() {
  const { cityname } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityname +
        "&appid=5ea20c34427b9975a24ca2c9d4b64486"
    )
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, [cityname]);
  console.log(data);
  return (
    <div>
      <div>{cityname}</div>
      {data.base}
    </div>
  );
}

export default CityDetail;
