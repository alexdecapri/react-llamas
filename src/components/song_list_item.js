import React from 'react';

const SongListItem = ({song}) => {

  const imageUrl = song.album.images[0].url;
  const songPreview = `https://embed.spotify.com/?uri=${song.uri}`;

  return (
    <li className="list-group-item">
      <div>
        <a href={song.external_urls.spotify}>
          <img className="album-cover" src={imageUrl} />
        </a>
      </div>
      <div>
        {song.name} by {song.artists[0].name}
      </div>
      <div>
        Don't have Spotify? Listen to this <a href={song.preview_url}>preview</a>.
      </div>
    </li>
  )
}

export default SongListItem;
