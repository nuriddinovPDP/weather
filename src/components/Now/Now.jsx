import styles from "./Now.module.css";
import { WiFog } from "react-icons/wi";
import { CiCalendar } from "react-icons/ci";
import { RiMapPinLine } from "react-icons/ri";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { language } from "../lang/lang";

export default function Now({ data }) {
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
    date: new Date(data?.dt * 1000)?.getDate(),
    months: months[new Date(data?.dt * 1000).getMonth() - 1],
    year: new Date(data?.dt * 1000)?.getFullYear(),
  };

  return (
    <div className={styles.box}>
      <span className={styles.span}>{language?.[lang]?.sidebar?.now}</span>
      <div className={styles.main}>
        <div className={styles.mini_box}>
          <strong className={styles.strong}>{data?.main?.temp}°C</strong>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
            className={styles.icon}
            alt=""
          />
        </div>
        <span className={styles.span}>{data?.weather?.[0]?.description}</span>
      </div>
      <span className={styles.day}>
        <CiCalendar className={styles.calendar} />
        {language?.[lang]?.sidebar?.weekDays[currentData.day]},{" "}
        {currentData.date},{" "}
        {language?.[lang]?.sidebar?.months?.[currentData.months]?.slice(0, 3)},
        {currentData.year}
      </span>
      <span className={styles.loacation}>
        <RiMapPinLine className={styles.calendar} />
        {data?.name}, {data?.sys?.country}
      </span>
    </div>
  );
}
