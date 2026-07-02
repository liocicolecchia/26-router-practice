// Challenge / Exercise

// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <Events /> },
      { path: "events/:eventId", element: <EventDetail /> },
      { path: "events/new", element: <NewEvent /> },
      { path: "events/:eventId/edit", element: <EditEvent /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
