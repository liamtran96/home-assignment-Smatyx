import { StrictMode, useEffect, useState } from "react";
import { CalendarComponent } from "./Calendar";
import { EventCard } from "./EventCard";
import { useEventsContext } from "../../context/event-context";
import { ScheduleView } from "../ScheduleTable";

export const EventsCalendar = () => {
  const [avoidHydration, setAvoidHydration] = useState(false);
  const [currentDate, setCurrentDate] = useState();
  const { eventList } = useEventsContext();

  function getDate(date) {
    setCurrentDate(new Date(date));
  }

  useEffect(() => {
    setAvoidHydration(true);
  }, []);

  return (
    <section className="flex w-full flex-col items-center xl:w-fit xl:flex-row xl:items-start px-4">
      <div className="w-80 py-8">
        {avoidHydration && <CalendarComponent getDate={getDate} />}
        <div className="mt-7 flex w-full flex-col">
          <p className="mb-3">Events</p>

          <div className="h-22 flex w-full flex-col overflow-y-auto py-4 scrollbar-thin">
            {eventList?.length ? (
              eventList?.map((event) => (
                <StrictMode key={event.id.toString()}>
                  <EventCard {...event} />
                </StrictMode>
              ))
            ) : (
              <p className="p-4">Nothing to show</p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-8 flex w-full overflow-y-auto py-8 scrollbar-thin scrollbar-thumb-transparent xl:flex-1">
        <ScheduleView
          eventList={eventList?.map(
            ({ title, date, startDate, endDate, type }) => ({
              startDate: new Date(`${date} ${startDate}`),
              endDate: new Date(`${date} ${endDate}`),
              title,
              type,
            })
          )}
          currentDate={currentDate}
        />
      </div>
    </section>
  );
};
