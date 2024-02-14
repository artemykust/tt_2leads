// eslint-disable-next-line react/prop-types
export default function Card({ src, description, id, openModal }) {
  return (
    <img
      id={id}
      className="gallery-pic"
      src={src}
      alt={description}
      onClick={openModal}
    />
  );
}
