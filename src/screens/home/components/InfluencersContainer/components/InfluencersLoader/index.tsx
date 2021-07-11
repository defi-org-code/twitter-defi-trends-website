const InfluencersLoader = () => {
  const loaders = [...Array(7)];
  return (
    <ul className="influencers-loader flex">
      {loaders.map((loader: any, index: number) => {
        return (
          <li key={index} className="influencers-loader-element">
            <span className="influencers-loader-element-top flex">
              <figure className="influencers-loader-element-circle loader"></figure>
              <figure className="influencers-loader-element-short loader"></figure>
            </span>
            <figure className="influencers-loader-element-long loader"></figure>
          </li>
        );
      })}
    </ul>
  );
};

export default InfluencersLoader;
