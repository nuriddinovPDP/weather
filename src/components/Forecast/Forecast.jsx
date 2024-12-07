import { useContext } from "react";
import ForecastItem from "../ForecastItem/Forecast.Item";
import { LangContext } from "../context/LangContext";
import { language } from "../lang/lang";
import "./Forecast.css";
export default function Forecast({ forecast }) {
  const { lang } = useContext(LangContext);

  return (
    <div className="forecast">
      <h2 className="forecast_title">{language[lang].sidebar.forecast}</h2>
      <ul className="forecast_list">
        <ForecastItem data={forecast?.list[4]} />
        <ForecastItem data={forecast?.list[12]} />
        <ForecastItem data={forecast?.list[20]} />
        <ForecastItem data={forecast?.list[28]} />
        <ForecastItem data={forecast?.list[36]} />
      </ul>
    </div>
  );
}
{
  /* <li className="forecast_item">
<img
  src="https://openweathermap.org/img/wn/04d@2x.png"
  alt=""
  className="forecast_img"
/>
<p className="forecast_temp">28.67*C</p>
<p className="forecast_date">1 Sep</p>
<p className="forecast_day">Friday</p>
</li>
<li className="forecast_item">
<img
  src="https://openweathermap.org/img/wn/04d@2x.png"
  alt=""
  className="forecast_img"
/>
<p className="forecast_temp">28.67*C</p>
<p className="forecast_date">1 Sep</p>
<p className="forecast_day">Friday</p>
</li>
<li className="forecast_item">
<img
  src="https://openweathermap.org/img/wn/04d@2x.png"
  alt=""
  className="forecast_img"
/>
<p className="forecast_temp">28.67*C</p>
<p className="forecast_date">1 Sep</p>
<p className="forecast_day">Friday</p>
</li>
<li className="forecast_item">
<img
  src="https://openweathermap.org/img/wn/04d@2x.png"
  alt=""
  className="forecast_img"
/>
<p className="forecast_temp">28.67*C</p>
<p className="forecast_date">1 Sep</p>
<p className="forecast_day">Friday</p>
</li>
<li className="forecast_item">
<img
  src="https://openweathermap.org/img/wn/04d@2x.png"
  alt=""
  className="forecast_img"
/>
<p className="forecast_temp">28.67*C</p>
<p className="forecast_date">1 Sep</p>
<p className="forecast_day">Friday</p>
</li> */
}
