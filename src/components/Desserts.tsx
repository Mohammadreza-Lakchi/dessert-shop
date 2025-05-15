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
  );
}

export default Desserts;
