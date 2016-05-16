import React from 'react';

class SoundCloudPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.client_id = 'ff43d208510d35ce49ed972b01f116ab';
        this.state = {
            embeddedPlayer: ''
        };

        if (window.SC && ! this.api) {
            window.SC.initialize({
                client_id: this.client_id
            });

            this.api = window.SC;
        }

        this.getEmbedHTML = this.getEmbedHTML.bind(this);
    }

    componentDidMount() {
        var currentTrack = this.props.track;

        // If the current track isn't resolvable by this player, render nothing
        if (currentTrack.embeddable === undefined || currentTrack.embeddable.url.indexOf("soundcloud.com") === -1) {
            //
        } else {
            this.getEmbedHTML(currentTrack.embeddable.url)
                .then((result) => {
                    this.setState({
                        embeddedPlayer: result,
                    });
                })
        }
    }

    render() {
        return <div dangerouslySetInnerHTML={{__html: this.state.embeddedPlayer}}></div>;
    }

    getEmbedHTML(url) {
        var api = this.api;
        var options = {
            height: 300,
            width: "100%",
            auto_play: false,
            buying: false,
            show_artwork: true
        };

        return new Promise(
            (resolve, reject) => {
                api.oEmbed(url, options,function(result){
                    if (result === null) {
                        reject("SoundCloud Player failed to fetch " + url);
                    } else {
                        resolve(result.html);
                    }
                })
            }
        )
    }
}

export default SoundCloudPlayer