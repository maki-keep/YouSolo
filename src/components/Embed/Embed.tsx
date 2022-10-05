import { useAppSelector } from '../../app/hooks';
import {
  selectCurrentSongId
} from "../../appSlice";
import "./Embed.css";

function Embed() {
  const currentSongId = useAppSelector(selectCurrentSongId);
  return (
    <div className="embed-container">
      <div
        className="embed-placeholder"
        style={{
          display: currentSongId === "" ? "block" : "none"
        }}
      >
        <p>Select an idol and one of her songs to start listening.</p>
      </div>
      {currentSongId !== "" && (
        <iframe
          width="360"
          height="240"
          src={`https://www.youtube.com/embed/${currentSongId}`}>
        </iframe>
      )}
    </div>
  );
}

export default Embed;
