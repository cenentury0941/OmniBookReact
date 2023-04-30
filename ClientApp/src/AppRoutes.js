import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Logout from "./components/Logout";
import { Book } from "./components/Book";
import { Learn , Guide } from "./components/Learn";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/logout',
        element: <Logout />
    },
    {
        path: '/book',
        element: <Book />
    },
    {
        path: '/learn',
        element: <Learn />
    },
    {
        path: '/guide',
        element: <Guide />
    }

];

export default AppRoutes;
