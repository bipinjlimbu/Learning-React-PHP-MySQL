import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/mainLayout";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

const routes = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <ListUser/>,
      },
      {
        path: '/create',
        element: <CreateUser/>,
      },
      {
        path: '/edit/:id',
        element: <EditUser/>,
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default routes;