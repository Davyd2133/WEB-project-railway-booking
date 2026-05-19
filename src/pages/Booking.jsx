import { useParams } from "react-router-dom";
import trains from "../data/trains";
import WagonSelector from "../components/WagonSelector";

function Booking() {
  const { trainId } = useParams();

  const train = trains.find((t) => t.id === Number(trainId));

  return (
    <div className="container">
      <h1>
        Бронювання: {train.from} → {train.to}
      </h1>

      <WagonSelector train={train} />
    </div>
  );
}

export default Booking;