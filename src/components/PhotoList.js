import "../App.css";
import ImageCard from "./ImageCard";

function PhotoList({ photos }) {
  return (
    <div className="photos-box">
      {photos.map((image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
}

export default PhotoList;
