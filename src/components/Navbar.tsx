import { QueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";

export default function Navbar() {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  return (
    <div className="d-flex mb-4">
      <a>
        <Link to="/">
          {" "}
          <b>Home</b>
        </Link>
      </a>

      <a>
        <Link to="/contact" className="ml-3">
          <b>Contact</b>
        </Link>
      </a>

      <button
        className="ml-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ["appliances"] })
        }
      >
        Invalidate appliances
      </button>
      <button
        className="ml-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => queryClient.invalidateQueries({ queryKey: ["users"] })}
      >
        Invalidate Users
      </button>
    </div>
  );
}
