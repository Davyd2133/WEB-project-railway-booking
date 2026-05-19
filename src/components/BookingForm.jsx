import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function BookingForm({
  selectedSeats,
  bookedSeats,
  setBookedSeats,
  trainId,
  wagon,
  setSelectedSeats,      
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      toast.error("Заповніть всі поля");
      return;
    }

    if (selectedSeats.length === 0) {
      toast.error("Оберіть місця");
      return;
    }

    const updatedSeats = [...bookedSeats, ...selectedSeats];

    localStorage.setItem(
      `booking-${trainId}-${wagon}`,
      JSON.stringify(updatedSeats)
    );

    setBookedSeats(updatedSeats);
    setSelectedSeats([]);

    setName("");
    setPhone("");
    setEmail("");

    toast.success("Квитки успішно заброньовано!");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Дані пасажира</h2>

        <input
          type="text"
          placeholder="Ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Підтвердити бронювання</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default BookingForm;