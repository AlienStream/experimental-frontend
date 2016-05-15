import React from 'react';

class MasonryItem extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="item-overlay gd animated fadeInUp wrapper bg-info">
                    <p className="text-white">{this.props.category}</p>
                    <div className="center text-center m-t-n">
                        <a href="#" onClick={this.props.action}><i className="icon-control-play i-2x"></i></a>
                    </div>
                </div>
                <div className="bottom gd bg-info wrapper">
                    <div className="m-t m-b"><a href="#" onClick={this.props.link} className="b-b b-danger h2 text-u-c text-lt font-bold">{this.props.title}</a></div>
                    <p className="hidden-xs">{this.props.description}</p>
                </div>
                <img src={this.props.image} alt="" className="img-full" />
            </div>
        );
    }
}

export default MasonryItem