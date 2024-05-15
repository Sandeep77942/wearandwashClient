import "./TimeSlot.css";
import OneSlot from "./OneSlot";
import { useState } from "react"





























































;

const TimeSlot = ({ selectedDate }) => {
  const [slotSelected, setSlotSelected] = useState(false);
  const renderTimeSlots = () => {
    const slots = [];
    for (let i = 0; i < 24; i++) {
      const slot = `${i.toString().padStart(2, "0")}:00 - ${(i + 1)
        .toString()
        .padStart(2, "0")}:00`;
      slots.push(
        <OneSlot key={slot} slot={slot} slotSelected={slotSelected} setSelectedSlot={setSlotSelected}>
          {slot}
        </OneSlot>
      );
    }
    return slots;
  };

  return <div className="time-slot-container">{renderTimeSlots()}</div>;
};

export default TimeSlot;
