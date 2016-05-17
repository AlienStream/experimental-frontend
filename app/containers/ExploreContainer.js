import React from 'react';

import MasonryGrid from '../components/masonry_grid'

class ExploreContainer extends React.Component {
    state = {
        items: []
    }

    layout = [
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

    componentDidMount() {
        fetch("http://api.alienstream.com/tracks/newest", {
            method: 'get'
        })
        .then((result) => {
            return result.json();
        }).then((json) =>  {
            var items = json.data.map(function(item) {
                var id = item.id;
                item.action = function() {
                    console.log("playing " + id);
                }
                item.link = function() {
                    console.log("navigating to track " + id);
                }
                return item;
            });

            this.setState({
                items: items
            })
        })
    }

    render() {
        return (
            <section className="vbox">
                <section className="scrollable">
                    <MasonryGrid items={this.state.items} layout={this.layout} />
                </section>
            </section>
        );
    }
}

export default ExploreContainer;