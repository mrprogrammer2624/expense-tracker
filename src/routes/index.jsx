import { HomeLayout } from "@/Layout/Home";
import { AddNewExpense, ExpenseStats, Home } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const TaskPilotRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <HomeLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "add",
              element: <AddNewExpense />,
            },
            {
              path: "stats",
              element: <ExpenseStats />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default TaskPilotRoute;
