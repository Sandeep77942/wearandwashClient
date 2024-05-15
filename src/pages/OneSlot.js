import { useState } from "react";
import "./TimeSlot.css";
function OneSlot({ slot, key, slotSelected, setSlotSelected}) {
  const [selectedSlot, setSelectedSlot] = useState(false);

  const handleClick = () => {
    setSelectedSlot(!selectedSlot);
    setSlotSelected=(!slotSelected)
  }
  return (
    <div
      key={key}
      className={selectedSlot ? "time-slot selected-slot" : "time-slot"}
      onClick={handleClick}
    >
      {slot}
    </div>
  );
}

export default OneSlot;
