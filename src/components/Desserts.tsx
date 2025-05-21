import Dessert from "./Dessert";
import data from "../data/data.json";

interface DataObjects {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

function Desserts() {
  return (
    <div className="md:max-w-[75%]">
      <h1 className="text-rose-900 font-bold text-4xl mb-5">Desserts</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item: DataObjects) => (
          <Dessert
            key={item.name}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Desserts;
