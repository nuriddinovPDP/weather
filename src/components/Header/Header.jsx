import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { BiTargetLock } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header({ fetchData, inputRef, setError, setLocation }) {
  const handleCurrentLocation = (evt) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setLocation({
          lon: longitude,
          lat: latitude,
        });
        setError(null);
      },
      (err) => {
        setError("Not allowed to current location");
      }
    );
  };

  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleClick = () => {
    localStorage.setItem("mode", isDark);
    setIsDark((p) => !p);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <p className="header_text">Weather</p>
          <div className="header_box">
            <input
              type="checkbox"
              className="mode visually-hidden"
              id="mode"
              onChange={handleClick}
            />
            <label className="mode-label" htmlFor="mode">
              <span className="mode-span"></span>
            </label>

            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="header_form"
            >
              <input
                type="search"
                ref={inputRef}
                placeholder="Enter city name"
                className="header_input"
              />

              <button className="header_btn" onClick={() => fetchData()}>
                <CiSearch className="search_icon" />
                Search
              </button>
            </form>
            <button onClick={handleCurrentLocation} className="header_btn-2">
              <BiTargetLock className="target" />
              Current Location
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
