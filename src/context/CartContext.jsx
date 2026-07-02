
Action: file_editor create /app/frontend/src/context/CartContext.jsx --file-text "import React, { createContext, useContext, useState, useCallback } from \"react\";
import { toast } from \"sonner\";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((plant) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === plant.id);
      if (existing) {
        return prev.map((p) =>
          p.id === plant.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...plant, qty: 1 }];
    });
    toast.success(`${plant.name} added to your cart`, {
      description: `Rs. ${plant.price}/-`,
    });
  }, []);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, count }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error(\"useCart must be used inside CartProvider\");
  return ctx;
};
"
Observation: Create successful: /app/frontend/src/context/CartContext.jsx