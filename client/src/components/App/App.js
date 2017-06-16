import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../../actions/actionsCreators';
import { Root } from '../../index';

function mapStateToProps (state) {
	return {
		favorites : state.favorites,
		feed : state.feed,
		navOpen : state.navOpen
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));

export default App;