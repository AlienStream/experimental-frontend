import React from 'react';

import SquareGrid from '../components/square_grid';

class MyCommunitiesContainer extends React.Component {
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
          store.dispatch('')
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
            <section className="hbox stretch FadeIn animated">
              <SquareGrid items={this.state.items} title="My Communities"/>
            </section>
          </section>
        </section>
    );
  }
}

export default MyCommunitiesContainer;