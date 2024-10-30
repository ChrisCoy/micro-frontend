// @ts-expect-error - no types for remote
import { mount } from "angularRemoteApp/AngularProduct";
import { useEffect } from "react";

const AngularProduct = () => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <>
      {/* @ts-expect-error - no types for remote */}
      <app-angular-product></app-angular-product>
    </>
  );
};

export { AngularProduct };
