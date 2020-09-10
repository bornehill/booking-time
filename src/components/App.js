import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header loading={this.props.loading} user={this.props.user} />
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        loading: state.apiCallsInProgress > 0,
        user: state.user
    };
}

export default connect(mapStateToProps)(App);
