import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeSlot from "./TimeSlot";
import "./Calender.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selected, setSelected] = useState(false);
  const [calenderOpen, setCalendarOpen] = useState(true);

  const handleSelect = () => {
    setCalendarOpen(false);
    setSelected(true);
    setSelectedDate(selectedDate);
  };
  const handleBack = () => {
    setCalendarOpen(true);
    setSelected(false);
    setSelectedDate(null);
  };
  return (
    <div className="container">
      {calenderOpen && (
        <div className="calendar-container">
          <DatePicker onChange={handleSelect} />
        </div>
      )}
      <div className="time-slot-container">
        {selected && (
          <>
            <TimeSlot selectedDate={selectedDate} className="time-slot" />
            <button onClick={handleBack}>Back</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;
