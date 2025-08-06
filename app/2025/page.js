// pages/events.jsx
import EventBox from "../eventBox"; 

// abstract accept \n

export default function EventsPage () {
  // Event data formatted for the component
  const events = [];

  return (
    <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
          2025 Events
        </h1>
      <div className="space-y-8">
        The events is not yet available.
      </div>
    </div>
  );
};