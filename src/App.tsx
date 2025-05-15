import { createContext, useState } from "react";
import Desserts from "./components/Desserts";

export type OrderType =
  | {
      name: string;
      price: number;
      amount: number;
      image: string;
    }[]
  | null;

export type OrderContextType = [
  OrderType,
  React.Dispatch<React.SetStateAction<OrderType>>
];

export const OrderContext = createContext<OrderContextType | null>(null);

function App() {
  const [order, setOrder] = useState<OrderType>(null);
  
  return (
    <div>
      <OrderContext.Provider value={[order, setOrder]}>
        <Desserts />
      </OrderContext.Provider>
    </div>
  );
}

export default App;
