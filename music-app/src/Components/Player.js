/** @format */

import React from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";

function Player(props) {
  return (
    <div className='c-player'>
      <audio src=''></audio>
      <h4>Playing now</h4>
      <PlayerDetails song={props.songs} />
      <PlayerControls />
      <p>
        <strong>Next up:</strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
}

export default Player;
