// eslint-disable-next-line react/prop-types
export default function Card({ src, description, openModal }) {
  return (
    <img
      className="gallery-pic"
      src={src}
      alt={description}
      onClick={openModal}
    />
  );
}
