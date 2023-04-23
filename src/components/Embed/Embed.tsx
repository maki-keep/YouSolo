import { useAppSelector } from '../../app/hooks';
import {
  selectCurrentSong
} from "../../appSlice";
import "./Embed.css";

function Embed() {
  const currentSong = useAppSelector(selectCurrentSong);
  const isValidSong = currentSong.id !== "" && currentSong.title !== "";
  return (
    <div className="embed-container">
      <div
        className="embed-placeholder"
        style={{
          display: !isValidSong ? "block" : "none"
        }}
      >
        <span>Select an idol and one of her songs to start listening.</span>
      </div>
      {isValidSong && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${currentSong.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width="360"
          height="240"
          title="YouTube video player"
          allowFullScreen
        >
        </iframe>
      )}
    </div>
  );
}

export default Embed;
