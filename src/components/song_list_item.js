import React from 'react';

const SongListItem = ({song}) => {

  const imageUrl = song.album.images[0].url;
  const songPreview = `https://embed.spotify.com/?uri=${song.uri}`;

  return (
    <li className="list-group-item">
      <iframe src={songPreview}></iframe>
    </li>
  )
}

export default SongListItem;


/*
<div>
  <img className="album-cover" src={imageUrl} />
</div>
<div>
  {song.name} by {song.artists[0].name}
</div>
*/
