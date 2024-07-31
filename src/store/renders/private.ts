import { defineStore } from "pinia";
import { Render } from "@/types";

export interface PrivateRendersState {
  render: Render | null;
  renders: Render[];
  loading: boolean;
  error: string | null;
  schedulerId: number;
  specificRenders: Render[];
  previous24HoursRenders: Render[];
  previous24HoursStats: any;
}

export const usePrivateRendersState = defineStore("renders-private", {
  state: (): PrivateRendersState => ({
    render: null,
    renders: [],
    loading: false,
    error: null,
    schedulerId: 0,
    specificRenders: [],
    previous24HoursRenders: [],
    previous24HoursStats: null,
  }),
});
