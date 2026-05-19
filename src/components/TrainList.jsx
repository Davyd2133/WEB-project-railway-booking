import { useEffect, useState } from "react";
import { getTrains } from "../services/BookingService";
import TrainCard from "./TrainCard";  

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  getTrains().then((data) => setTrains(data));
}, []);

  const filteredTrains = trains.filter((train) => {
    const text = `${train.number} ${train.from} ${train.to}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук потяга або маршруту"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="train-grid">
        {filteredTrains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}

export default TrainList;