import React from 'react';

const SongListItem = ({song}) => {

  const imageUrl = song.album.images[0].url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <img className="media-object album-cover" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading">{song.name}</div>
      </div>
    </li>
  )
}

export default SongListItem;
