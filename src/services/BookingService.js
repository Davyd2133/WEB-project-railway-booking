export async function getTrains() {
  const response = await fetch("/src/data/trains.json");

  return response.json();
}

export function saveBooking(key, seats) {
  localStorage.setItem(key, JSON.stringify(seats));
}

export function getBooking(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}