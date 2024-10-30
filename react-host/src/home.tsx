import { useEffect, useState } from "react";

// @ts-expect-error - no types for remote
import { RemoteHeader } from "reactRemoteApp/RemoteReactHeader";
import { AngularProduct } from "./components/angular-product";

type Product = {
  name: string;
  id: string;
  price: number;
};

function Home() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.addEventListener<any>("cart", (e: CustomEvent<Product[]>) => {
      setCart(e.detail);
    });
  }, []);

  const handleRemoveProduct = (id: string) => {
    dispatchEvent(
      new CustomEvent("cart", {
        detail: cart.filter((product) => product.id !== id),
      })
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 relative">
      <RemoteHeader stateFromHost={count} setStateFromHost={setCount} />
      <div className="flex-1 flex justify-center items-center">
        <AngularProduct />
      </div>
      <div className="flex flex-col gap-2 absolute top-[80px] left-4">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 justify-between items-center px-4 py-2 bg-white"
          >
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleRemoveProduct(product.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <footer className="h-12 w-full bg-indigo-900 text-white flex justify-center items-center">
        chriscoy
      </footer>
    </div>
  );
}

export { Home };
