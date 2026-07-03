import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

function Events() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // incorrect response still to be fixed
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
