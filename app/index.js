import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';


import App from './components/app';

import ExploreContainer from './containers/ExploreContainer'
import LoginContainer from './containers/LoginContainer'

import MyCommunitiesContainer from './containers/MyCommunitiesContainer'
import MyFavoritesContainer from './containers/MyFavoritesContainer'
import MyPlaylistsContainer from './containers/MyPlaylistsContainer'
import Settings from './containers/SettingsContainer'


import CommunityContainer from './containers/CommunityContainer'
import PlaylistContainer from './containers/PlaylistContainer'
import TrackContainer from './containers/TrackContainer'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			// App Pages
			<Route path="explore" component={ExploreContainer} />
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
	</Router>, 
document.getElementById('app')) 
