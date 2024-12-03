import { FaCloud } from "react-icons/fa";

export default function TodayAtItem({ data }) {
  // Vaqtni formatlash
  const hour = new Date(data?.dt * 1000).getHours(); // Unix vaqtini millisekundga aylantirish

  const realHour = hour > 12 ? hour - 12 : hour;
  const ampm = hour >= 12 ? "PM" : "AM";

  const hourText = realHour + " " + ampm;
  return (
    <li className="at_item">
      <p className="at_text">{hourText}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt=""
        className="at_icon"
      />
      <span className="at_span">{data?.main.temp}°C</span>
    </li>
  );
}
