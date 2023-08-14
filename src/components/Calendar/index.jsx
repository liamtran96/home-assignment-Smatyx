import { EventsCalendar } from "../EventCalendar";
import { Header } from "../Header";

function Calendar() {
  return (
    <main className="flex w-full flex-col bg-primary scrollbar">
      <Header />
      <div className="flex w-full flex-1 flex-row bg-primary">
        <EventsCalendar />
      </div>
    </main>
  );
}

export default Calendar;
