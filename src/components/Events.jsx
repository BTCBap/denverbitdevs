import React, { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>
              {event.date} - {event.time}
            </p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
