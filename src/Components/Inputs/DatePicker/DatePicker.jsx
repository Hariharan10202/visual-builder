import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

const DatePicker = () => {
  const [date, setDate] = useState(null);

  return (
    <Calendar
      value={date}
      onChange={(e) => setDate(e.value)}
      dateFormat="dd/mm/yy"
    />
  );
};

export default DatePicker;
