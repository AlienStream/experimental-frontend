import React from 'react';

class YoutubePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var currentTrack = this.props.track;

        if (this.trackCanBeHandled(currentTrack)) {
            this.player = new window.YT.Player('YTplayer', {
                width: "100%",
                height: "300px",
                events: {
                    'onReady': () => {this.play(currentTrack.embeddable.url)},
                    'onStateChange': this.onPlayerStateChange,
                    'onError': this.onError,
                }
            });
        }
    }

    render() {
        return <div id="YTplayer"></div>;
    }

    play(url) {
        url = url.replace("&amp;","%26");
        url = url.replace("attribution_link","");
        url = decodeURIComponent(url);
        var video_id = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);

        if (video_id != null) {
            this.player.loadVideoById(String(video_id[2]))
        } else {
            console.log("The youtube url is not valid.");
        }
    }

    trackCanBeHandled(track) {
        if(track.embeddable && track.embeddable.url.indexOf("youtube.com") > -1) {
            return true;
        }

        if(track.embeddable && track.embeddable.url.indexOf("youtu.be") > -1) {
            return true;
        }

        return false
    }

    onPlayerStateChange(event) {
        if (event.data == window.YT.PlayerState.PLAYING) {
        }

        if (event.data == window.YT.PlayerState.PAUSED) {
        }

        if (event.data == window.YT.PlayerState.ENDED ) {
        }
    }

    onError(error) {
        console.log(error);
    }
}

export default YoutubePlayer