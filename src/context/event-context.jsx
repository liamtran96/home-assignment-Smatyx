import { useState, useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCRUD } from "../hooks/useCRUD";
import { toast } from "react-toastify";

const defaultEvents = {
  eventList: [],
  setEventList: () => [],
  saveEventStorage: () => null,
  removeEventStorage: () => null,
  updateEventStorage: () => null,
};
const EventsContext = createContext(defaultEvents);
const useEventsContext = () => useContext(EventsContext);

const EventProvider = ({ children }) => {
  const key = "events";
  const [eventList, setEventList] = useState([]);
  const { get, set } = useLocalStorage();
  const { add, remove, update } = useCRUD();

  const saveEventStorage = (event) => {
    const saveEvent = add(eventList, event);
    set(key, JSON.stringify(saveEvent));
    setEventList(saveEvent);
    toast.success(`Event "${event.title}" created!`);
  };

  const removeEventStorage = (id) => {
    const removeEvent = remove(eventList, id);
    set(key, JSON.stringify(removeEvent));
    setEventList(removeEvent);
    toast.success(`Event removed!`);
  };

  const updateEventStorage = (event) => {
    const updateEvent = update(event, eventList);
    set(key, JSON.stringify(updateEvent));
    setEventList(updateEvent);
    toast.success(`Event "${event.title}" updated!`);
  };

  useEffect(() => {
    const getItems = get(key);
    setEventList(getItems);
  }, [setEventList]);

  return (
    <EventsContext.Provider
      value={{
        eventList,
        setEventList,
        saveEventStorage,
        removeEventStorage,
        updateEventStorage,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export { EventProvider, useEventsContext };
