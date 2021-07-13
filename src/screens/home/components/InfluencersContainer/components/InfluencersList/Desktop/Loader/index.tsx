const Loader = () => {
  const loaders = [...Array(7)];
  return (
    <ul className="influencers-loader-desktop flex">
      {loaders.map((loader: any, index: number) => {
        return (
          <li key={index} className="loader-element">
            <span className="loader-element-top flex">
              <figure className="loader-element-circle loader"></figure>
              <figure className="loader-element-short loader"></figure>
            </span>
            <figure className="loader-element-long loader"></figure>
          </li>
        );
      })}
    </ul>
  );
};

export default Loader;
