import React from 'react';
import Masonry from 'react-masonry-component';

import MasonaryItem from './masonry_item'


class MasonryGrid extends React.Component {
    render() {
        var items = this.props.items;
        var layout = this.props.layout;

        var masonryItems = items.map(function(item, key) {
           return (
               <MasonaryItem
                key={key}
                className={layout[key]}
                {...item}
               />
           );
        });

        return (
            <Masonry
                id="masonry"
                className="pos-rlt animated fadeInUpBig"
                options={{percentPosition: true, columnWidth: '.column-width-sizer'}}
            >
                {masonryItems}
            </Masonry>
        );
    }
}

export default MasonryGrid
