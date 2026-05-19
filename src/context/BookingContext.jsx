import { createContext, useState } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedTrain, setSelectedTrain] = useState(null);

  const [selectedWagon, setSelectedWagon] = useState(null);

  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <BookingContext.Provider
      value={{
        selectedTrain,
        setSelectedTrain,
        selectedWagon,
        setSelectedWagon,
        selectedSeats,
        setSelectedSeats,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}