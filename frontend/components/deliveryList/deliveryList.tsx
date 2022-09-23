import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Deliveries {
    deliveries {
      id,
      name,
      destination,
      contents,
      completed
    }
  }
`;

const DeliveryList = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="p-2 rounded-2xl mx-8">
      <div className="text-center text-2xl font-bold mb-4 text-yellow">
        <h1> I am Lrrr </h1>
        {/* <h1> Deliveries </h1> */}
      </div>
      <ul role="list" className="grid grid-cols-1 gap-4">
        {data.deliveries.map((delivery: any) => (
          <li key={delivery.name} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-even-less-dark shadow">
            <div className="flex w-full items-center justify-between space-x-6">
              <div className="flex-1 truncate">
                <div className="border-b border-even-less-dark rounded-lg bg-less-dark px-4 py-5 mb-6">
                  <h3 className="text-lg font-medium leading-6 text-white">{delivery.name}</h3>
                </div>
                <p className="mt-1 truncate text-sm text-grey m-4">Destination: {delivery.destination}</p>
                <p className="mt-1 truncate text-sm text-grey m-4">Contents: {delivery.contents}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeliveryList
