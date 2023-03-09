import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClassifierPage from "./pages/ClassifierPage";

const App = () => {
  // здесь необходимо задать роуты, ClassifierPage просто для примера
  const routes = createBrowserRouter(
    [{ path: "", element: <ClassifierPage /> }],
    {
      basename: "/",
    }
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
