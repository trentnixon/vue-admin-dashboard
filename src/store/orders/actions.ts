import { usePrivateOrdersState } from "./private";
import { fetchOrdersFromService, fetchOrderDetailsFromService } from "./service";
import { Order } from "@/types";

export async function fetchOrders() {
  const state = usePrivateOrdersState();
  try {
    state.loading = true;
    const response = await fetchOrdersFromService();
    if (response && response.data) {
      state.orders = response.data as Order[];
      console.log("Fetched orders data:", state.orders);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function fetchAccountOrders(id: number) {
  const state = usePrivateOrdersState();
  try {
    state.loading = true;
    const response = await fetchOrderDetailsFromService(id);
    if (response && response.data) {
      state.accountOrders.push(response.data as Order);
      console.log("Fetched order data:", response.data);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function setOrders(orderIds: number[]) {
  const state = usePrivateOrdersState();
  state.accountOrders = []; // Reset account orders before fetching new ones
  state.loading = true;
  state.error = null;
  try {
    for (const id of orderIds) {
      await fetchAccountOrders(id);
    }
    console.log("Fetched all order details:", state.accountOrders);
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}
