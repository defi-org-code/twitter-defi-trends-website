import { useState } from "react";

interface IProps {
  src: string;
  alt: string;
  customClassName?: string;
}

const ImgComponent = ({ src, alt, customClassName }: IProps) => {
  const [loaded, setLoaded] = useState(false);
  const className = customClassName ? `${customClassName} img` : "img";
  return (
    <div className={className}>
      {!loaded && <figure className="img-loader loader" />}
      <img
        style={{ opacity: loaded ? 1 : 0 }}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImgComponent;
