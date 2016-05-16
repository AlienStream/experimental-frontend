import React from 'react';

class PlayerFrame extends React.Component {
    render() {
        var styles = {
            backgroundImage: 'url("' + this.props.backgroundImage +'")',
            backgroundSize: 'cover',
            height: '300px',
        };

        return (
            <div className="m-t-n-xxs item pos-rlt" style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export default PlayerFrame