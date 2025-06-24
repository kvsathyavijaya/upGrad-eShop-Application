import { createContext } from "react";

export const ProductContext = createContext([
  {
    name: "",
    category: "",
    description: "",
    price: "",
    quantity: 0,
    imageUrl: "",
  },
]);

// create function to get/update/delete product list and details data and store in above context

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider
    // value={{ }}
    >
      {children}
    </ProductContext.Provider>
  );
};
