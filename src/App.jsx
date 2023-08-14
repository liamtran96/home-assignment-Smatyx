import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Suspense } from "react";
import Register from "./components/Register";
import Calendar from "./components/Calendar";

function App() {
  return (
    <main className="flex w-full flex-col bg-primary scrollbar">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/schedule"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Calendar />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
