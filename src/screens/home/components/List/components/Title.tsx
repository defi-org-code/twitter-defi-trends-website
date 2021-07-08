import images from "../../../../../constans/images";

interface IProps {
  image: string;
  title: string;
}

const Title = ({ image, title }: IProps) => {
  return (
    <section className="list-title flex">
      <figure className="list-title-images">
        <img
          src={images.frame.img}
          alt={images.frame.alt}
          className="list-title-images-frame"
        />
        <img
          src={image}
          alt="category icon"
          className="list-title-images-main"
        />
      </figure>
      <h3>{title}</h3>
    </section>
  );
};

export default Title;
