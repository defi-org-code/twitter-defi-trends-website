const Loader = () => {
  const mobileLoaders = [...Array(4)];
  return (
    <ul className="influencers-loader-mobile flex">
      {mobileLoaders.map((e, i) => {
        return <li className="loader-element loader" key={i}></li>;
      })}
    </ul>
  );
};

export default Loader;
