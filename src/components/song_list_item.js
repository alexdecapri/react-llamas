import React from 'react';

const SongListItem = ({song}) => {

  const imageUrl = song.album.images[0].url;
  const songPreview = `https://embed.spotify.com/?uri=${song.uri}`;

  return (
    <li className="list-group-item wow fadeInUp">
      <div className="media">
        <a className="media-left" href={song.external_urls.spotify} target="_blank">
          <img className="album-cover media-object" src={imageUrl} />
        </a>
        <div className="media-body">
          <a href={song.external_urls.spotify} target="_blank"><h4 className="media-heading">{song.name}</h4></a>
          <h5 className="media-heading">{song.artists[0].name}</h5>
          Don't have Spotify? Listen to this <a href={song.preview_url} target="_blank">preview</a>.
        </div>
      </div>
    </li>
  )
}

export default SongListItem;
