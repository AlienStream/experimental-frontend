import React from 'react';

import PlayerFrame from '../components/player_frame';
import Playlist from '../components/playlist';
import SoundCloudPlayer from '../components/soundcloud_player';
import YoutubePlayer from '../components/youtube_player';

class Sidebar extends React.Component {
  render() {
    var backgroundImage = "images/m43.jpg";

    var tracks = [
      {
        'id': 1,
        'title': 'This track is Dope as Fuck',
        'artist': 'The M Machine',
      },
    ];

    return (
      <div className="sidebar bg-black dker">
        <aside id="sidebar">
          <section className="animated fadeInUp">
            <section className="scrollable">
              <PlayerFrame backgroundImage={backgroundImage}>
                <SoundCloudPlayer />
                <YoutubePlayer />
              </PlayerFrame>
              <Playlist tracks={tracks}/>
            </section>
          </section>
        </aside>
      </div>
    );
  }
}

export default Sidebar;