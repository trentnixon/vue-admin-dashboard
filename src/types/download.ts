export interface DownloadAttributes {
  Name: string;
  URL: string;
  grouping_category: string;
  isAccurate: boolean;
  hasBeenProcessed: boolean;
  forceRerender: boolean;
  DisplayCost: number;
  CompletionTime: string;
  OutputFileSize: string;
  UserErrorMessage: string;
  hasError: boolean;
  downloads: object;
  numDownloads: number;
  assetLinkID: string;
  gameID: string;
  errorEmailSentToAdmin: boolean;
  updatedAt: string;
  asset: { data: { attributes: { Name: string; CompositionID: string } } };
  asset_category: {
    data: {
      attributes: {
        Identifier: string;
      };
    };
  };
}

export interface Download {
  id: number;
  attributes: DownloadAttributes;
}

export interface DownloadState {
  download: Download | null;
  downloads: Download[];
  loading: boolean;
  error: string | null;
}
