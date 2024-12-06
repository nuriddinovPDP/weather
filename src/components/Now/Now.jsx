import styles from "./Now.module.css";
import { WiFog } from "react-icons/wi";
import { CiCalendar } from "react-icons/ci";
import { RiMapPinLine } from "react-icons/ri";

export default function Now({ data }) {
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
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
    <div className={styles.box}>
      <span className={styles.span}>Now</span>
      <div className={styles.main}>
        <div className={styles.mini_box}>
          <strong className={styles.strong}>{data?.main.temp}°C</strong>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            className={styles.icon}
            alt=""
          />
        </div>
        <span className={styles.span}>{data?.weather[0].description}</span>
      </div>
      <span className={styles.day}>
        <CiCalendar className={styles.calendar} />
        {currentData.day},{currentData.date},{currentData.months}{" "}
        {currentData.year}
      </span>
      <span className={styles.loacation}>
        <RiMapPinLine className={styles.calendar} />
        {data?.name},{data?.sys.country}
      </span>
    </div>
  );
}
