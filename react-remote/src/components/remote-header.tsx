import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn";

interface Props {
  className?: string;
  stateFromHost?: number;
  setStateFromHost?: (state: number) => void;
}

type Product = {
  name: string;
  id: string;
  price: number;
};

const RemoteHeader: React.FC<Props> = ({
  className,
  stateFromHost = 0,
  setStateFromHost,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.addEventListener("cart", (e: any) => {
      setCart(e.detail);
    });
  }, []);

  const handleClearCart = () => {
    window.dispatchEvent(new CustomEvent("cart", { detail: [] }));
    setCart([]);
  };

  return (
    <header
      className={cn(
        "flex justify-between px-16 items-center gap-4 w-full h-16 bg-indigo-900 text-white",
        className
      )}
    >
      <h1 className="text-lg font-bold">Remote Header</h1>

      <div>
        <strong>Host State: </strong>
        <span>{stateFromHost}</span>
        <button
          className="bg-green-500 text-center text-white w-6 ml-1 px-2 hover:bg-green-700 rounded"
          onClick={() => setStateFromHost?.(stateFromHost + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-center text-white ml-1 w-6 px-2 hover:bg-red-700 rounded"
          onClick={() => setStateFromHost?.(stateFromHost - 1)}
        >
          -
        </button>
      </div>

      <div>
        <strong>Carrinho: </strong>
        <span> {cart.length} items</span>
        <button
          className="bg-red-500 text-white ml-1 px-2 hover:bg-red-700"
          onClick={handleClearCart}
        >
          x
        </button>
      </div>
    </header>
  );
};

export { RemoteHeader };
