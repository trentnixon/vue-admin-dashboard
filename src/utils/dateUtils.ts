import dayjs from 'dayjs';

interface ProcessingTracker {
  competitions: { itemsFound: number; itemsUpdated: number; itemsNew: number; errorsDetected: number };
  teams: { itemsFound: number; itemsUpdated: number; itemsNew: number; errorsDetected: number };
  games: { itemsFound: number; itemsUpdated: number; itemsNew: number; errorsDetected: number };
  totalStages: number;
  currentStage: string;
  completedStages: string[];
  pendingStages: string[];
}

interface CollectionAttributes {
  whenWasTheLastCollection: string;
  TimeTaken: number;
  MemoryUsage: number;
  hasError: boolean;
  processingTracker: ProcessingTracker;
}

interface CollectionItem {
  attributes: CollectionAttributes;
}

type NumericAttributeKeys = 'TimeTaken' | 'MemoryUsage';

export const generateDateRange = (days: number): string[] => {
  const endDate = dayjs();
  const startDate = endDate.subtract(days, 'day');
  const dateArray: string[] = [];

  for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate); date = date.add(1, 'day')) {
    dateArray.push(date.format('DD/MM/YYYY')); // Format to UK date format
  }

  return dateArray;
};

export const filterCollectionsByDate = (collections: CollectionItem[], days: number): { dateArray: string[], dataPoints: number[] } => {
  const dateArray = generateDateRange(days);
  const collectionDates = collections.map((item) =>
    dayjs(item.attributes.whenWasTheLastCollection).format('DD/MM/YYYY')
  ); // Format collection dates to UK date format

  const dataPoints = dateArray.map((date) => {
    return collectionDates.includes(date) ? 1 : 0;
  });

  return { dateArray, dataPoints };
};

export const filterCollectionsForChart = (collections: CollectionItem[], key: NumericAttributeKeys): { dateArray: string[], dataPoints: number[] } => {
  const dateArray = collections.map((item) =>
    dayjs(item.attributes.whenWasTheLastCollection).format('DD/MM/YYYY')
  ); // Format collection dates to UK date format

  const dataPoints = collections.map((item) => item.attributes[key]);

  return { dateArray, dataPoints };
};

export const formatDate = (dateString: string, format: string) => {
  return dayjs(dateString).format(format);
};