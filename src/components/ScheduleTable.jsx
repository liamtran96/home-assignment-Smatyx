import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  DayView,
  Resources,
  MonthView,
  WeekView,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Scheduler } from "@devexpress/dx-react-scheduler-material-ui";
import { resources } from "../mocks/dataSources";

export const ScheduleView = ({ eventList, currentDate }) => {
  return (
    <div>
      <Scheduler data={eventList}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={0} endDayHour={24} />
        <WeekView startDayHour={0} endDayHour={24} />
        <MonthView />
        <Appointments />
        <Toolbar />
        <ViewSwitcher />
        <Resources data={resources} />
      </Scheduler>
    </div>
  );
};
