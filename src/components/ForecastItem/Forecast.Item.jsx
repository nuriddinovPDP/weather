import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import "./ForecastItem.css";
import { language } from "../lang/lang";
export default function ForecastItem({ data }) {
  const { lang } = useContext(LangContext);

  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentData = {
    day:
      new Date(data?.dt * 1000).getDay() - 1 != "-1"
        ? weekDays[new Date(data?.dt * 1000).getDay() - 1]
        : "Sunday",

    date: new Date(data?.dt * 1000).getDate(),
    months: months[new Date(data?.dt * 1000).getMonth() - 1],
    year: new Date(data?.dt * 1000).getFullYear(),
  };

  return (
    <li className="forecast_item">
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt=""
        className="forecast_img"
      />
      <p className="forecast_temp">{data?.main.temp}°C</p>
      <p className="forecast_date">
        {language?.[lang]?.sidebar?.months?.[currentData.months]?.slice(0, 3)},
        {currentData.date}
      </p>{" "}
      <p className="forecast_day">
        {" "}
        {language?.[lang]?.sidebar?.weekDays[currentData.day]},
      </p>
    </li>
  );
}
