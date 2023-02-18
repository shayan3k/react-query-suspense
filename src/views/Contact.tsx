import { lazy } from "react";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
const ComponentOne = lazy(() => import("../components/ComponentOne")); // Lazy-loaded
const ComponentTwo = lazy(() => import("../components/ComponentTwo")); // Lazy-loaded

function Contact() {
  return (
    <main
      style={{
        maxWidth: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
      }}
    >
      <Navbar />

      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <Suspense fallback={<div>Loading</div>}>
            <ComponentOne />
          </Suspense>
        </div>

        <div className="col-span-1">
          <Suspense fallback={<div>Loading</div>}>
            <ComponentTwo />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default Contact;
