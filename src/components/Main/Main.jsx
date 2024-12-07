import "./Main.css";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BiNavigation } from "react-icons/bi";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { language } from "../lang/lang";
export default function Main({ data }) {
  const visible = data?.visibility / 1000;
  const { lang } = useContext(LangContext);
  return (
    <ul className="main_list">
      <li className="main_item">
        <span className="main_span">
          {language[lang].sidebar.main.Humidity}
        </span>
        <div className="main_box-2">
          <MdOutlineWaterDrop className="main_icon" />
          <p className="main_text">{data?.main.humidity}%</p>
        </div>
      </li>
      <li className="main_item">
        <span className="main_span">
          {language[lang].sidebar.main.Pressure}
        </span>
        <div className="main_box-2">
          <FaRegCompass className="main_icon" />

          <p className="main_text">{data?.main.pressure}hPa</p>
        </div>
      </li>
      <li className="main_item">
        <span className="main_span">
          {" "}
          {language[lang].sidebar.main.Visibility}
        </span>
        <div className="main_box-2">
          <IoEyeOutline className="main_icon" />
          <p className="main_text">{visible}Km</p>
        </div>
      </li>
      <li className="main_item">
        <span className="main_span">
          {language[lang].sidebar.main.WindSpeed}
        </span>
        <div className="main_box-2">
          <BiNavigation className="main_icon" />

          <p className="main_text">{data?.wind.speed}m/s</p>
        </div>
      </li>
      <li className="main_item">
        <span className="main_span">
          {language[lang].sidebar.main.FeelsLike}
        </span>
        <div className="main_box-2">
          <FaThermometerThreeQuarters className="main_icon" />

          <p className="main_text">{data?.main.feels_like}°C</p>
        </div>
      </li>
    </ul>
  );
}
