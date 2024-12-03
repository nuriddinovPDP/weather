import Forecast from "../Forecast/Forecast";
import Now from "../Now/Now";
import styles from "./Left.module.css";
export default function Left({ data, forecast }) {
  return (
    <div className={styles.left}>
      <Now data={data} />
      <Forecast forecast={forecast} />
    </div>
  );
}
