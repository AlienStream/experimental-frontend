import React from 'react';

import SquareGrid from '../components/square_grid';

class ExploreContainer extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        fetch("http://api.alienstream.com/communities", {
            method: 'get'
        })
        .then((result) => {
            return result.json();
        }).then((json) =>  {
            var items = json.data.map(function(item) {
                var id = item.id;
                item.title = item.name;
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
            <section class="vbox">
                <section class="w-f-md" id="bjax-target">
                    <section class="hbox stretch">
                        <SquareGrid items={this.state.items} title="Explore"/>
                    </section>
                </section>
            </section>
        );
    }
}

export default ExploreContainer;