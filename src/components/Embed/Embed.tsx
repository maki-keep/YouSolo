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
        <p>Select an idol and one of her songs to start listening.</p>
      </div>
      {isValidSong && (
        <iframe
          title={currentSong.title}
          width="360"
          height="240"
          src={`https://www.youtube.com/embed/${currentSong.id}`}>
        </iframe>
      )}
    </div>
  );
}

export default Embed;
