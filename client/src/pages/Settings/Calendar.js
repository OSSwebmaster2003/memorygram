import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ form, setForm, value }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setForm({ ...form, birthday: date });
  };

  return (
    <DatePicker
      className="w-full py-3 bg-bgColor px-7 text-textColor"
      selected={selectedDate}
      onChange={handleDateChange}
      value={value}
      dateFormat="MM/dd/yyyy"
      placeholderText="date of birth"
    />
  );
};

export default Calendar;
