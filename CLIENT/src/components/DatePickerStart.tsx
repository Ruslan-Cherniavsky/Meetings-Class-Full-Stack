import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const MyDatePickerStart = (props: any) => {
  const { meeting_date, setMeeting_date } = props;
  const [startDate, setStartDate] = useState(new Date(meeting_date));

  const dateUpdateHadle = (date: Date) => {
    setStartDate(date)
    setMeeting_date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`)
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`)
    console.log(startDate)
  }


  return (<div>
    <DatePicker selected={startDate} onChange={(date: Date) => dateUpdateHadle(date)} />
  </div>
  );
};

export { MyDatePickerStart } 