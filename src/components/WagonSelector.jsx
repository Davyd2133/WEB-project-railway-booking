import { useState } from "react";
import SeatMap from "./SeatMap";

function WagonSelector({ train }) {
  const [selectedWagon, setSelectedWagon] = useState(train.wagons[0]);
  
  return (
    <div>
      <h2>Оберіть вагон</h2>

      <div className="wagon-list">
        {train.wagons.map((wagon) => (
          <button
            key={wagon}
            onClick={() => setSelectedWagon(wagon)}
          >
            Вагон {wagon}
          </button>
        ))}
      </div>

      <SeatMap wagon={selectedWagon} trainId={train.id} />
    </div>
  );
}

export default WagonSelector;