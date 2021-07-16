import useTweetsData from "../../../../hooks/useTweetsData";
import { IDatasetElement } from "../../../../types";
import LiveAnimation from "../LiveAnimation";
import Tweet from "./Tweet";
import ListItemLoader from "../ListItemLoader";
import ErrorHandling from "../../../../../../components/ErrorHandling";
import LoadingHandler from "../../../../../../components/LoadingHandler";
import "react-virtualized/styles.css";

import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from "react-virtualized";
import React from "react";
interface IProps {
  item: IDatasetElement;
  symbol: string;
}

const ListItemHashtagsCashtags = ({ item, symbol }: IProps) => {
  const { name } = item;
  const [tweets, loading, error] = useTweetsData(name, symbol);
  const cache = new CellMeasurerCache({
    fixedWidth: true,
  });

  const renderRow = ({ index, key, style, parent }: any) => {
    const tweet = tweets[index];
    if (!tweet) return;
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ measure, registerChild }) => (
          <div style={style} onLoad={measure} ref={registerChild as any}>
            <Tweet tweet={tweet} categoryTitle={`${symbol}${name}`} />
          </div>
        )}
      </CellMeasurer>
    );
  };

  return (
    <div className="list-item-hashtags">
      <ErrorHandling showError={error} errorText="Loading error...">
        <>
          <section className="list-item-hashtags-top flex">
            <p>Live tweets</p>
            <LiveAnimation />
          </section>
          <LoadingHandler
            isLoading={!error && loading}
            LoadingComponent={<ListItemLoader />}
          >
            <AutoSizer>
              {({ height, width }) => (
                <List
                  className="list-item-hashtags-list"
                  width={width}
                  onRowsRendered={({ startIndex, stopIndex }) => {}}
                  height={height}
                  deferredMeasurementCache={cache}
                  rowHeight={cache.rowHeight}
                  rowRenderer={renderRow}
                  rowCount={tweets.length}
                  overscanRowCount={3}
                  scrollAtIndex={tweets.length}
                />
              )}
            </AutoSizer>
          </LoadingHandler>
        </>
      </ErrorHandling>
    </div>
  );
};

export default ListItemHashtagsCashtags;
