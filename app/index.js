import React from 'react';
import ReactDOM from 'react-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {persistStore, autoRehydrate} from 'redux-persist'


import App from './containers/App'

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


const middleware = routerMiddleware(browserHistory)

const store = createStore(
  combineReducers({
    AlienStream,
    routing: routerReducer
  }),
  compose(
     window.devToolsExtension ? window.devToolsExtension() : undefined,
     applyMiddleware(middleware),
     autoRehydrate()
  )
)
persistStore(store)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
history.listen(location => {
	console.log(location.pathname);
})


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
