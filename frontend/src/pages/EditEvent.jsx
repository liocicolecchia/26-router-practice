import { useRouteLoaderData } from "react-router";

import EventForm from "../components/EventForm";

function EditEvent() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data.event} />;
}

export default EditEvent;
