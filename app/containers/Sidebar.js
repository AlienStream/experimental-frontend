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

    var currentTrack = {
          id: 64817,
          title: "FUK UR MGMT (Snails Remix) by Kill The Noise",
          rank: 7100,
          thumbnail: "http://i1.sndcdn.com/artworks-000162214724-xuymb8-t500x500.jpg",
          favorite_count: 0,
          play_count: 0,
          channel_id: 4485,
          content_flags: 0,
          created_at: "2016-05-10 13:55:32",
          updated_at: "2016-05-16 16:58:09",
          source_id: 1,
          track_id: 64817,
          community_id: 1,
          hotness: 48.299319727891,
          embeddable: {
            id: 1973742,
            track_id: 64817,
            url: "https://soundcloud.com/killthenoise/fuk-ur-mgmt-snailsremix",
            type: "soundcloud",
            created_at: "2016-05-10 13:59:11",
            updated_at: "2016-05-10 13:59:11"
          },
          channel: {
            id: 4485,
            url: "http://soundcloud.com/killthenoise",
            artist_id: 290,
            created_at: "2015-08-05 18:32:21",
            updated_at: "2015-08-05 18:32:21",
            artist: {
              id: 290,
              name: "killthenoise",
              thumbnail: "http://i1.sndcdn.com/artworks-000125039114-fzdqp5-t500x500.jpg",
              favorite_count: 0,
              play_count: 0,
              created_at: "2015-08-05 18:32:21",
              updated_at: "2015-08-05 18:32:21"
            }
          }
    };

    return (
      <div className="sidebar bg-black dker">
        <aside id="sidebar">
          <section className="animated fadeInUp">
            <section className="scrollable">
              <PlayerFrame backgroundImage={backgroundImage}>
                <SoundCloudPlayer track={currentTrack}/>
                <YoutubePlayer track={currentTrack}/>
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