import { useContext } from "react";
import "./Sun.css";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { LangContext } from "../context/LangContext";
import { language } from "../lang/lang";

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
  const { lang } = useContext(LangContext);
  return (
    <div className="sun">
      <span className="sun_span">
        {language[lang].sidebar.sunrise} & {language[lang].sidebar.sunset}
      </span>

      <ul className="sun_list">
        <li className="sun_item">
          <span className="item_span"> {language[lang].sidebar.sunrise}</span>
          <div className="item_main">
            <FiSunrise className="sun-icon" />
            <p className="item_text">{hourTextSunrise}</p>
          </div>
        </li>
        <li className="sun_item">
          <span className="item_span">{language[lang].sidebar.sunset}</span>
          <div className="item_main">
            <FiSunset className="sun-icon" />
            <p className="item_text">{hourTextSunset}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
