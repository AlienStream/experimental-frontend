import React from 'react';

import SquareItem from './square_item'


class SquareGrid extends React.Component {
    render() {
        var items = this.props.items;

        var squareItems = items.map(function(item, key) {
            return (
                <SquareItem
                    key={key}
                    {...item}
                />
            );
        });

        return (
            <section className="vbox square-grid">
                <section className="scrollable padder-lg">
                    <h2 className="font-thin m-b">{this.props.title}</h2>
                    <div className="row row-sm">
                        {squareItems}
                    </div>
                </section>
            </section>
        );
    }
}

export default SquareGrid
