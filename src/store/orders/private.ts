import { defineStore } from "pinia";
import { Order } from "@/types";

export interface PrivateOrdersState {
  orders: Order[];
  accountOrders: Order[];
  loading: boolean;
  error: string | null;
}

export const usePrivateOrdersState = defineStore("orders-private", {
  state: (): PrivateOrdersState => ({
    orders: [],
    accountOrders: [],
    loading: false,
    error: null,
  }),
});
