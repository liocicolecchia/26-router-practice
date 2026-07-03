import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

function Events() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

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
    // return { isError: true, message: "Could not fetch the events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events. " }), {
    //   status: 500,
    // });

    throw Response.json({ message: "Could not fetch events. " }, { status: 500 });
  } else {
    return response;
  }
}
