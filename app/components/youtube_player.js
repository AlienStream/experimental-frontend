import React from 'react';

class YoutubePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            embeddedPlayer: '',
            loaded: false
        };
    }

    componentDidMount() {
        var currentTrack = this.props.track;

        if (this.trackCanBeHandled(currentTrack)) {
            var embedUrl = "https://youtube.com/embed/" + this.getVideoId(currentTrack.embeddable.url);
            this.setState({
                embeddedPlayer: "<iframe " +
                    "id=\"YTplayer\" " +
                    "frameborder=\"0\" " +
                    "allowfullscreen=\"1\"  " +
                    "style=\"width: 100%; height: 300px;\" " +
                    "src='" + embedUrl + "'}>" +
                "</iframe>",
                loaded: true
            });
        }
    }

    render() {
        // on first initialization grab an instance of the player
        if (this.state.loaded == true && this.player === undefined && window.YT.get !== undefined) {
            this.player = window.YT.get('YTplayer', {
                events: {
                    'onStateChange': this.onPlayerStateChange,
                    'onError': this.onError,
                }
            });
        }

        return <div dangerouslySetInnerHTML={{__html: this.state.embeddedPlayer}}></div>;
    }

    getVideoId(url) {
        url = url.replace("&amp;","%26");
        url = url.replace("attribution_link","");
        url = decodeURIComponent(url);
        return String(url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]);
    }

    play(url) {
        var video_id = this.getVideoId(url);
        if (video_id != null) {
            this.player.loadVideoById(video_id)
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