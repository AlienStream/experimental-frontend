import React from 'react';
import ReactDOM from 'react-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import persistState from 'redux-localstorage'


import App from './components/app'

import ExploreContainer from './containers/ExploreContainer'
import LoginContainer from './containers/LoginContainer'

import MyCommunitiesContainer from './containers/MyCommunitiesContainer'
import MyFavoritesContainer from './containers/MyFavoritesContainer'
import MyPlaylistsContainer from './containers/MyPlaylistsContainer'
import SettingsContainer from './containers/SettingsContainer'


import CommunityContainer from './containers/CommunityContainer'
import PlaylistContainer from './containers/PlaylistContainer'
import TrackContainer from './containers/TrackContainer'


import AlienStream from './reducers/index'


// We want to store our application state in localstorage to persist against refreshes
const createPersistentStore = compose(
  persistState()
)(createStore)


// Add the reducer to your store on the `routing` key
const store = createPersistentStore(
  combineReducers({
    AlienStream,
    routing: routerReducer
  }),
  {}, // Initial State
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				// App Pages
				<IndexRoute component={ExploreContainer} />
				<Route path="login" component={LoginContainer} />

				// User Specific Pages
				<Route path="communities" component={MyCommunitiesContainer} />
				<Route path="favorites" component={MyFavoritesContainer} />
				<Route path="playlists" component={MyPlaylistsContainer} />
				<Route path="settings" component={SettingsContainer} />

				// Object Detail Pages
				<Route path="community/:communityName" component={CommunityContainer} />
				<Route path="playlist/:playlistId" component={PlaylistContainer} />
				<Route path="track/:trackId" component={TrackContainer} />
		    </Route>
		</Router>
	</Provider>,
document.getElementById('app')) 
