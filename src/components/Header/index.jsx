import { CreateEventButton } from "./CreateEventButton";
import HeaderDate from "./Date";

export const Header = () => {
  return (
    <header className="flex w-full flex-row border-b border-slate-300 p-10 xl:justify-between">
      <nav className="flex w-full items-center gap-5">
        <div className="flex gap-5">
          <h1 className="flex flex-1 text-4xl">Weeky Schedule</h1>
          <HeaderDate />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 xl:justify-end flex-1">
          <CreateEventButton />
        </div>
      </nav>
    </header>
  );
};
