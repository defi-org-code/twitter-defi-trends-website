import React, { useEffect, useState } from "react";
import { IDatasetElement } from "../../../../../types";
import { handleUrl } from "../../../../../utils/urls";

interface IProps {
  item: IDatasetElement;
}
const Urls = ({ item }: IProps) => {
  const url = handleUrl(item.extra);
  return (
    <div className="list-item-urls">
      <iframe src={url} title=" la"></iframe>
    </div>
  );
};
export default Urls;
