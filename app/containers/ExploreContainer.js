import React from 'react';

import MasonryGrid from '../components/masonry_grid'

class ExploreContainer extends React.Component {
    render() {
        var items = [
            {
                id: 1,
                title: "test",
                description: "testing",
                image: "images/m31.jpg",
                category: "watch later"
            }
        ];

        items = items.map(function(item) {
            var id = item.id;

            item.action = function() {
                console.log("playing " + id);
            }

            item.link = function() {
                console.log("navigating to track " + id);
            }

            return item;
        });

        var layout = [
            "item item-large",
            "item item-tall column-width-sizer",
            "item",
            "item",
            "item",
            "item",
            "item",
            "item item-tall",
            "item",
            "item",
            "item",
            "item",
            "item item-tall",
            "item item-wide",
            "item item-large",
            "item",
            "item",
            "item",
            "item",
            "item",
            "item",
            "item item-wide",
            "item",
            "item",
            "item",
        ];

        return (
            <section className="vbox">
                <section className="scrollable">
                    <MasonryGrid items={items} layout={layout} />
                </section>
            </section>
        );
    }
}

export default ExploreContainer;