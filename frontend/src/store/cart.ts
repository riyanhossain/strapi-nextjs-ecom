import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OrderItem, Product } from "@/types";

interface CartState {
  cart: OrderItem[];
  addToCart: (item: Product) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart(item) {
        set((state) => {
          const existingItem = state.cart.find(
            (i) => i.product.documentId === item.documentId
          );

          if (existingItem) {
            // If the item exists, update its quantity
            return {
              cart: state.cart.map((i) =>
                i.product.documentId === item.documentId
                  ? {
                      ...i,
                      quantity: i.quantity + 1,
                      sub_total: (i.quantity + 1) * i.product.price,
                    }
                  : i
              ),
            };
          }

          // If the item doesn't exist, add it with quantity 1
          return {
            cart: [
              ...state.cart,
              {
                product: item,
                quantity: 1,
                sub_total: item.price,
              },
            ],
          };
        });
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + item.sub_total, 0);
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((i) => i.product.documentId !== id),
        }));
      },

      increaseQuantity: (id) => {
        set((state) => {
          const existingItem = state.cart.find(
            (i) => i.product.documentId === id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.product.documentId === id
                  ? {
                      ...i,
                      quantity: i.quantity + 1,
                      sub_total: (i.quantity + 1) * i.product.price,
                    }
                  : i
              ),
            };
          }

          return state;
        });
      },

      decreaseQuantity: (id) => {
        set((state) => {
          const existingItem = state.cart.find(
            (i) => i.product.documentId === id
          );

          if (existingItem) {
            if (existingItem.quantity === 1) {
              return {
                cart: state.cart.filter((i) => i.product.documentId !== id),
              };
            }

            return {
              cart: state.cart.map((i) =>
                i.product.documentId === id
                  ? {
                      ...i,
                      quantity: i.quantity - 1,
                      sub_total: (i.quantity - 1) * i.product.price,
                    }
                  : i
              ),
            };
          }

          return state;
        });
      },
    }),
    {
      name: "cart-storage", // Persist cart to localStorage
    }
  )
);
