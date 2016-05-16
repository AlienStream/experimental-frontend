import React from 'react';

class PlaylistTrack extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="pull-right m-l">
                    <a href="#" className="m-r-sm"><i className="icon-heart"></i></a>
                    <a href="#" className="m-r-sm"><i className="icon-flag"></i></a>
                    <a href="#" className="m-r-sm"><i className="icon-plus"></i></a>
                </div>
                <a href="#" className="jp-play-me m-r-sm pull-left">
                    <i className="icon-control-play text"></i>
                    <i className="icon-control-pause text-active"></i>
                </a>
                <div className="clear text-ellipsis">
                    <span>{this.props.title}</span>
                    <span className="text-muted">  -- {this.props.artist}</span>
                </div>
            </li>
        );
    }
}

export default PlaylistTrack
