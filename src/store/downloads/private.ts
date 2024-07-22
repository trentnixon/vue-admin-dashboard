import { defineStore } from "pinia";
import { Download } from "@/types";

export interface PrivateDownloadState {
  download: Download | null;
  downloads: Download[];
  loading: boolean;
  error: string | null;
  totalDownloadCount: number; // Add this line
}

export const usePrivateDownloadState = defineStore("downloads-private", {
  state: (): PrivateDownloadState => ({
    download: null,
    downloads: [],
    loading: false,
    error: null,
    totalDownloadCount: 0, // Initialize here
  }),
});
