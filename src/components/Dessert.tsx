interface DessertProps {
  name: string;
  category: string;
  price: number;
  amount: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

function Dessert({ name, price, amount, category, image }: DessertProps) {
  return (
    <div className="p-3">
      <div className="relative mb-8">
        <picture>
          <source media="(max-width: 425px)" srcSet={image.mobile} />
          <source media="(max-width: 1024px)" srcSet={image.tablet} />
          <img className={`w-full rounded-2xl ${amount > 0 && 'border-red-600'}`} src={image.desktop} alt={name} />
        </picture>
        <div className={`absolute w-[160px] h-[40px] right-[calc(50%-80px)] bottom-[-20px] rounded-2xl bg-white flex justify-center items-center border ${amount > 0 && 'border-red-600 bg-red-600 text-white'} hover:border-red-600 hover:text-red-600 cursor-pointer`}>
          {amount > 0 ? (
            <div>
              <button className="cursor-pointer">
                <img
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="increase amount"
                />
              </button>
              <span>{amount}</span>
              <button className="cursor-pointer">
                <img
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="desrease amount"
                />
              </button>
            </div>
          ) : (
            <button className="flex items-center gap-2 font-bold cursor-pointer">
              <img src="/assets/images/icon-add-to-cart.svg" alt="cart" /> Add
              to Cart
            </button>
          )}
        </div>
      </div>
      <span className="text-gray-400">{category}</span>
      <h1 className="font-semibold">{name}</h1>
      <span className="text-red-600">
        <b>${price}</b>
      </span>
    </div>
  );
}

export default Dessert;
