import { defineStore } from "pinia";
import { Render } from "@/types";

export interface PrivateRendersState {
  render: Render | null;
  renders: Render[];
  loading: boolean;
  error: string | null;
  schedulerId: number;
  specificRenders: Render[];
}

export const usePrivateRendersState = defineStore("renders-private", {
  state: (): PrivateRendersState => ({
    render: null,
    renders: [],
    loading: false,
    error: null,
    schedulerId: 0,
    specificRenders: [],
  }),
});
