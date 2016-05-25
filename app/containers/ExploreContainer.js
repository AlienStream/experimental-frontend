import React from 'react';
import {routerActions} from 'react-router-redux';

import SquareGrid from '../components/square_grid';

class ExploreContainer extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        var store = this.context.store;

        fetch("http://api.alienstream.com/communities", {
            method: 'get'
        })
        .then((result) => {
            return result.json();
        }).then((json) =>  {
            var items = json.data.map(function(item) {
                item.title = item.name;
                item.onClick = function() {
                    store.dispatch(routerActions.push("/community/" + item.name));
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
                <section className="w-f-md" id="bjax-target">
                    <section className="hbox stretch fadeIn animated">
                        <SquareGrid items={this.state.items} title="Explore"/>
                    </section>
                </section>
            </section>
        );
    }
}

ExploreContainer.contextTypes = {
  store: React.PropTypes.object
};

export default ExploreContainer;