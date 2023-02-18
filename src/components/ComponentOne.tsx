import { useQuery } from "react-query";
import axios from "axios";

export default function () {
  const { isLoading, error, data, isFetching }: any = useQuery(
    "appliances",
    async () => {
      const { data } = await axios.get(
        "https://random-data-api.com/api/v2/appliances?size=10"
      );

      return data;
    },
    { suspense: true }
  );

  return (
    <div className="font-bold">
      {data?.map((item: any, index: string) => (
        <>
          <div key={index}>
            {item.id}- {item.equipment}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
