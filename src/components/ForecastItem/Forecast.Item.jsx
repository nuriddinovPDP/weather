import "./ForecastItem.css";
export default function ForecastItem({ data }) {
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
    <li className="forecast_item">
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt=""
        className="forecast_img"
      />
      <p className="forecast_temp">{data?.main.temp}°C</p>
      <p className="forecast_date">
        {currentData.date} {currentData.months}
      </p>
      <p className="forecast_day">{currentData.day}</p>
    </li>
  );
}
