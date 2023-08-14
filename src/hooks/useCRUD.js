export const useCRUD = () => {
  const add = (events, event) => {
    return [...events, event];
  };
  const remove = (events, eventId) => {
    return events.filter(({ id }) => id !== eventId);
  };

  const update = (event, events) => {
    return [event, ...events.filter(({ id }) => id !== event.id)];
  };

  return { add, update, remove };
};
