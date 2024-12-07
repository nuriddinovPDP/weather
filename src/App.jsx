import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import Air from "./components/Air/Air";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import Left from "./components/Left/Left";
import Main from "./components/Main/Main";
import Now from "./components/Now/Now";
import Sun from "./components/Sun/Sun";
import TodayAt from "./components/TodayAt/TodayAt";
import axios from "axios";
import { ThemeContext } from "./components/context/ThemeContext";
import { LangContext } from "./components/context/LangContext";
import { language } from "./components/lang/lang";

function App() {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [air, setAir] = useState(null);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
  });

  const API_KEY = "4cb49bcfb8c93820602a307894a6e9fd";

  useEffect(() => {
    API.get(
      `/weather?q=tashkent&units=metric&appid=${API_KEY}&units=metric`
    ).then((res) => setData(res.data));

    API.get(
      `/forecast?q=tashkent&units=metric&appid=${API_KEY}&units=metric`
    ).then((res) => setForecast(res.data));
  }, []);

  useEffect(() => {
    API.get(
      `/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
    ).then((res) => setData(res.data));

    API.get(
      `/forecast?lat=${location?.lat}&lon=${location?.lon}&appid=${API_KEY}&units=metric`
    ).then((res) => setForecast(res.data));

    API.get(
      `/air_pollution?lat=${location?.lat}&lon=${location?.lon}&appid=${API_KEY}`
    ).then((res) => setAir(res.data));
  }, [location]);

  const fetchData = () => {
    API.get(
      `/weather?q=${inputRef?.current?.value}&units=metric&appid=${API_KEY}&units=metric`
    ).then((res) => setData(res.data));

    API.get(
      `/forecast?q=${inputRef?.current?.value}&units=metric&appid=${API_KEY}&units=metric`
    ).then((res) => setForecast(res.data));
  };

  useEffect(() => {
    API.get(
      `/air_pollution?lat=${data?.coord.lat}&lon=${data?.coord.lon}&appid=${API_KEY}`
    ).then((res) => setAir(res.data));
  }, [data]);

  error && alert(error);

  const { isDark } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div className={`${!isDark ? "dark" : "light"}`}>
      <Header
        setError={setError}
        setLocation={setLocation}
        inputRef={inputRef}
        fetchData={fetchData}
      />
      <div className="main">
        <div className="container">
          <div className="main_inner">
            <Left data={data} forecast={forecast} />
            <div className="main_box">
              <h4 className="app_title">{language[lang].sidebar.today}</h4>
              <div className="box">
                <Air air={air} />
                <Sun data={data} />
              </div>
              <Main data={data} />
              <TodayAt forecast={forecast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
