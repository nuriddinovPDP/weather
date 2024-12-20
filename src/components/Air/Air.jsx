import { useContext } from "react";
import AirItem from "../AirItem/AirItem";
import "./Air.css";
import { FaWind } from "react-icons/fa6";
import { LangContext } from "../context/LangContext";
import { language } from "../lang/lang";

export default function Air({ air }) {
  let airQuality = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const { lang } = useContext(LangContext);
  return (
    <div className="air">
      <div className="air_top">
        <span className="air_top-span">{language[lang].sidebar.air}</span>
        <button
          className={`air_top-btn ${airQuality[air?.list?.[0]?.main?.aqi - 1]
            ?.slice(0, 4)
            .toLowerCase()}`}
        >
          {
            language[lang].sidebar?.airQuality2[
              airQuality[air?.list?.[0]?.main?.aqi - 1]
            ]
          }
        </button>
      </div>
      <div className="air_bottom">
        <FaWind className="air_icon" />
        <AirItem airData={air?.list[0].components.pm2_5} airType={"PM2.5"} />
        <AirItem airData={air?.list[0].components.pm10} airType={"PM10"} />
        <AirItem airData={air?.list[0].components.so2} airType={"SO2"} />
        <AirItem airData={air?.list[0].components.co} airType={"CO"} />
        <AirItem airData={air?.list[0].components.no} airType={"NO"} />
        <AirItem airData={air?.list[0].components.no2} airType={"NO2"} />
        <AirItem airData={air?.list[0].components.nh3} airType={"NH3"} />
        <AirItem airData={air?.list[0].components.o3} airType={"O3"} />
      </div>
    </div>
  );
}
