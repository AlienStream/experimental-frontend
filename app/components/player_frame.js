import React from 'react';

class PlayerFrame extends React.Component {
    render() {
        return (
            <div className="m-t-n-xxs item pos-rlt" style={{backgroundImage: this.props.backgroundImage, backgroundSize: 'cover'}}>
                <div className="top text-right">
                <span className="musicbar animate bg-success bg-empty inline m-r-lg m-t">
                  <span className="bar1 a3 lter"></span>
                  <span className="bar2 a5 lt"></span>
                  <span className="bar3 a1 bg"></span>
                  <span className="bar4 a4 dk"></span>
                  <span className="bar5 a2 dker"></span>
                </span>
                </div>
                <div className="bottom gd bg-info wrapper-lg">
                    <span className="pull-right text-sm">101,400 <br />Followers</span>
                    <span className="h2 font-thin">Soph Ashe</span>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default PlayerFrame