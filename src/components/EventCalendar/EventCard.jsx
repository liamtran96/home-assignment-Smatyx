import moment from "moment";
import { useStateContext } from "../../context/state-context";
import { EventForm } from "../EventForm";

export const EventCard = (event) => {
  const { setModal } = useStateContext();
  const formatDate = moment(event.date).format("DD MMM, YYYY");
  const formatStart = moment(event.startDate, "HH:mm A").format("HH:mm A");
  const formatEnd = moment(event.endDate, "HH:mm A").format("HH:mm A");

  return (
    <article
      className="mt-3 flex w-full cursor-pointer flex-col rounded-lg border border-slate-300 p-2 transition-all hover:animate-pulse"
      onClick={() => {
        setModal({
          open: true,
          title: <p>Update or Delete Event</p>,
          body: <EventForm event={event} />,
        });
      }}
    >
      <p className="text-sm">{event.title}</p>
      <p className="text-xs">{formatDate}</p>
      <span className="mt-3 flex flex-row items-center gap-x-2">
        {/* <Clock /> */}
        <p className="text-xs text-tertiary">
          {formatStart} - {formatEnd}
        </p>
      </span>
    </article>
  );
};
