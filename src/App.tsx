import "./App.css";
import { ROUTES } from "@common/router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

dayjs.extend(utc);

function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
