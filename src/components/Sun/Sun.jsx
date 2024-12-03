import "./Sun.css";
import { FiSunrise, FiSunset } from "react-icons/fi";

export default function Sun({ data }) {
  const sunriseHour = new Date(data?.sys.sunrise * 1000).getHours();
  const sunsetHour = new Date(data?.sys.sunset * 1000).getHours();

  const sunriseMinute = new Date(data?.sys.sunset * 1000).getMinutes();
  const sunsetMinute = new Date(data?.sys.sunset * 1000).getMinutes();
  const realHourSunset = sunsetHour > 12 ? sunsetHour - 12 : sunsetHour;
  const realHourSunrise = sunriseHour > 12 ? sunriseHour - 12 : sunriseHour;

  const ampmsunrise = sunriseHour >= 12 ? "PM" : "AM";
  const ampmsunset = sunsetHour >= 12 ? "PM" : "AM";

  const hourTextSunrise =
    realHourSunrise + ":" + sunriseMinute + " " + ampmsunrise;
  const hourTextSunset = realHourSunset + ":" + sunsetMinute + " " + ampmsunset;

  return (
    <div className="sun">
      <span className="sun_span">Sunrise & Sunset</span>

      <ul className="sun_list">
        <li className="sun_item">
          <span className="item_span">Sunrise</span>
          <div className="item_main">
            <FiSunrise className="sun-icon" />
            <p className="item_text">{hourTextSunrise}</p>
          </div>
        </li>
        <li className="sun_item">
          <span className="item_span">Sunset</span>
          <div className="item_main">
            <FiSunset className="sun-icon" />
            <p className="item_text">{hourTextSunset}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
