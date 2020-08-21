import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import LeisureCentreListView from '../leisure-centre/LeisureCentreListView';
import * as centresActions from '../../actions/centres-actions';
import { bindActionCreators } from 'redux';

class HomePage extends React.Component {
    render() {
        const { centres } = this.props;
        return (
            <LeisureCentreListView centres={centres} />
        );
    }
}

HomePage.propTypes = {
  centres: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps)
{
  return {
      centres: state.centres
  };
}

function mapDispatchToProps(dispatch)
{
  return {
      actions: bindActionCreators(centresActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
