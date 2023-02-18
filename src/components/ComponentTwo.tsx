import { useQuery } from "react-query";
import axios from "axios";

export default function () {
  const { isLoading, error, data, isFetching }: any = useQuery(
    "users",
    async () => {
      const { data } = await axios.get("https://dummyjson.com/users");

      return data.users;
    },
    { suspense: true }
  );

  console.log(data);

  return (
    <div className="font-bold">
      {data?.slice(0, 10).map((item: any, index: string) => (
        <>
          <div key={index}>
            {item.id}- {item.firstName} {item.lastName}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
