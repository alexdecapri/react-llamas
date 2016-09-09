import React from 'react';

import SongListItem from '../components/song_list_item';

const SongList = (props) => {
  const songItems = props.songs.map((song) => {
    return <SongListItem
      key={song.id}
      song={song} />
  });

  return (
    <div>
      <h2 className="text-center"></h2>
      <ul className="col-sm-8 col-sm-offset-2 list-group">
        {songItems}
      </ul>
    </div>
  )
}

export default SongList;
