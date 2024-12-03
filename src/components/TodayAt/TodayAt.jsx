import TodayAtItem from "../TodayAtItem/TodayATItem";
import "./TodayAt.css";
import { FaCloud } from "react-icons/fa";

export default function TodayAt({ forecast }) {
  return (
    <div className="at">
      <h4 className="at_title">Today at</h4>
      <ul className="at_list">
        <TodayAtItem data={forecast?.list[1]} />
        <TodayAtItem data={forecast?.list[2]} />
        <TodayAtItem data={forecast?.list[3]} />
        <TodayAtItem data={forecast?.list[4]} />
        <TodayAtItem data={forecast?.list[5]} />
        <TodayAtItem data={forecast?.list[6]} />
        <TodayAtItem data={forecast?.list[7]} />
        <TodayAtItem data={forecast?.list[8]} />
      </ul>
    </div>
  );
}
