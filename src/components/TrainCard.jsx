import { Link } from "react-router-dom";

function TrainCard({ train }) {
  return ( 
    <div className="card">
      <h2>Потяг {train.number}</h2>

      <p>
        {train.from} → {train.to}
      </p>

      <p>Відправлення: {train.departure}</p>

      <p>Тривалість: {train.duration}</p>

      <Link to={`/booking/${train.id}`}>
        <button>Забронювати</button>
      </Link>
    </div>
  );
}

export default TrainCard;