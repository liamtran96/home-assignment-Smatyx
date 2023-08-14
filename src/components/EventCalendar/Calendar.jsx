import { Calendar } from "react-calendar";
import { ArrowLeft, ArrowRight } from "../Icons";

export const CalendarComponent = ({ getDate }) => {
  const date = new Date();
  return (
    <Calendar
      onChange={(value) => {
        const calendarCurrentDate = new Date(value);
        getDate(calendarCurrentDate);
      }}
      value={date}
      className="flex w-full flex-col items-center rounded-lg border border-slate-300 p-4 text-xs"
      onClickDecade={undefined}
      locale="en"
      next2Label={null}
      prev2Label={null}
      prevLabel={<ArrowLeft />}
      nextLabel={<ArrowRight />}
    />
  );
};
