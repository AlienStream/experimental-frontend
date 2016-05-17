import React from 'react';

import PlaylistTrack from './playlist_track';

class Playlist extends React.Component {
    render() {

        var tracks = this.props.tracks;

        var playlistItems = tracks.map(function (track, key) {
            return (
                <PlaylistTrack
                    key={key}
                    {...track}
                />
            );
        })

        return (
            <ul className="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                {playlistItems}
            </ul>
        );
    }
}

export default Playlist
