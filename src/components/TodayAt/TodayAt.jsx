import { useContext } from "react";
import TodayAtItem from "../TodayAtItem/TodayATItem";
import "./TodayAt.css";
import { FaCloud } from "react-icons/fa";
import { LangContext } from "../context/LangContext";
import { language } from "../lang/lang";

export default function TodayAt({ forecast }) {
  const { lang } = useContext(LangContext);
  return (
    <div className="at">
      <h4 className="at_title">{language[lang].sidebar.todayat}</h4>
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
