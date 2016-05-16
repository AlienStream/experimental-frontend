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
      id: 62774,
      title: "DJ Fresh - Louder (Doctor P & Flux Pavilion Remix)",
      rank: 12900,
      thumbnail: "",
      favorite_count: 0,
      play_count: 0,
      channel_id: 18,
      content_flags: 0,
      created_at: "2016-05-04 07:00:47",
      updated_at: "2016-05-16 16:56:04",
      source_id: 1,
      track_id: 62774,
      community_id: 1,
      hotness: 43.288590604027,
      embeddable: {
        id: 1883364,
        track_id: 62774,
        url: "https://youtu.be/7cxgao2rYZw",
        type: "youtube",
        created_at: "2016-05-04 07:08:47",
        updated_at: "2016-05-04 07:08:47"
      },
      channel: {
        id: 18,
        url: "https://www.youtube.com/channel/UCfLFTP1uTuIizynWsZq2nkQ",
        artist_id: 17,
        created_at: "2015-06-03 05:19:57",
        updated_at: "2015-06-03 05:19:57",
        artist: {
          id: 17,
          name: "UKF Dubstep",
          thumbnail: "https://i.ytimg.com/vi/MJlo0hWnZWc/maxresdefault.jpg",
          favorite_count: 0,
          play_count: 0,
          created_at: "2015-06-03 05:19:57",
          updated_at: "2015-06-03 05:19:57"
        }
      }
    }

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