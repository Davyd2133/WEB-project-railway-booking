import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

function SeatMap({ wagon, trainId }) {
  const seats = Array.from({ length: 24 }, (_, i) => i + 1);
  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`booking-${trainId}-${wagon}`)) || [];
    setBookedSeats(saved);
  }, [trainId, wagon]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h2>Місця у вагоні {wagon}</h2>

      <div className="seat-grid">
        {seats.map((seat) => {
          let className = "seat";

          if (bookedSeats.includes(seat)) {
            className += " booked";
          } else if (selectedSeats.includes(seat)) {
            className += " selected";
          }

          return (
            <div
              key={seat}
              className={className}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>

      <BookingForm
        selectedSeats={selectedSeats}
        bookedSeats={bookedSeats}
        setBookedSeats={setBookedSeats}
        trainId={trainId}
        wagon={wagon}
        setSelectedSeats={setSelectedSeats}
      />
    </div>
  );
}

export default SeatMap;