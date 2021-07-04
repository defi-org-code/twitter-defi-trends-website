import { IDatasetElement } from "./../types/index";
import { compareDataset } from "./../utils/index";
import { useEffect, useState, useRef } from "react";

const useCompare = (newDataset: any) => {
  const prevDatasetRef = useRef<IDatasetElement[]>(newDataset);
  const [entities, setEntities] = useState<string[]>([]);

  useEffect(() => {
    const newEntities = compareDataset(prevDatasetRef.current, newDataset);
    setEntities(newEntities);
    prevDatasetRef.current = newDataset;
  }, [newDataset]);

  return [entities];
};

export default useCompare;
