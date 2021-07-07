import { IDatasetElement } from "../types";

export const compareDataset = (
  prevDataset: IDatasetElement[],
  newDataset: IDatasetElement[]
) => {
  return newDataset
    .filter(
      (o1: IDatasetElement) =>
        !prevDataset.some((o2: IDatasetElement) => o1.name === o2.name)
    )
    .map((m) => m.name);
};
