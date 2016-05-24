import React from 'react';

class SquareItem extends React.Component {
    render() {

        var thumbnail = this.props.thumbnail;
        if ( ! thumbnail) {
            thumbnail = "http://infinitelegroom.com/wp-content/uploads/2013/03/10-best-headphones-preview.png";
        }


        return (
            <div className="item-wrapper">
                <div className="item">
                    <div className="pos-rlt fillParent">
                        <div className="item-overlay opacity r r-2x bg-black">
                            <div className="center text-center m-t-n-lg">
                                <a onClick={this.props.action}><i className="fa fa-play-circle fa-5x"></i></a>
                            </div>
                        </div>
                        <a href="track-detail.html"><img src={thumbnail} alt="" className="r r-2x img-full" /></a>
                    </div>
                </div>
                <div className="padder-v">
                    <a onClick={this.props.action} className="text-ellipsis">{this.props.title}</a>
                </div>
            </div>
        );
    }
}

export default SquareItem;