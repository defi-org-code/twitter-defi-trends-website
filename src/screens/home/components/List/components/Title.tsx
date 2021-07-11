import { useContext } from "react";
import { ThemeContext } from "../../../../../providers/ThemeProvider";

interface IProps {
  image: string;
  title: string;
  darkImage: string;
}

const Title = ({ image, title, darkImage }: IProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className="list-title flex">
      <figure className="list-title-images">
        <img
          src={isDarkMode ? darkImage : image}
          alt="frame"
          className="list-title-image"
        />
      </figure>
      <h3>{title}</h3>
    </section>
  );
};

export default Title;
