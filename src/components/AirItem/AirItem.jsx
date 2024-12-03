export default function AirItem({ airData, airType }) {
  return (
    <div className="air_box">
      <span className="air_box-span">{airType}</span>
      <span className="air-box-span">{airData}</span>
    </div>
  );
}
