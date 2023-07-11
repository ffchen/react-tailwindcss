import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/index";


function App() {
  return (
    <Suspense>
       <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
