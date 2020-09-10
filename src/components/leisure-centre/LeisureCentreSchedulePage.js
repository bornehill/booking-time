import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as centresActions from '../../actions/centres-actions';
import { bindActionCreators } from 'redux';
import LeisureCentreTile from './LeisureCentreTile';
import ScheduleBoard from '../schedule-board/ScheduleBoard';
import formatISO from 'date-fns/formatISO';
import {mapTimeToDateByWeekDay} from '../../common/tools/mapTimeToDateTime';

class LeisureCentreSchedulePage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentWillMount(){
    this.props.actions.loadCentreSchedule(this.props.centre);
  }

  render() {
      const { centreSchedule, centre, activities } = this.props;
      const schedules = mapTimeToDateByWeekDay(centreSchedule);
      return (
          <main>
            <section className="max-w-screen-xl mx-auto">
              <div className="max-w-md mx-auto">
                <LeisureCentreTile  key={centre.id} centre={centre} showButton={false} customClass="col-start-2"/>
              </div>
            </section>

            <section className="max-w-screen-xl mx-auto m-10">
              <div className="flex justify-center">
                <ScheduleBoard key={centre.id} schedule={schedules} activities={activities}/>
              </div>
            </section>
          </main>
      );
  }
}

LeisureCentreSchedulePage.propTypes = {
  centre: PropTypes.object.isRequired,
  centreSchedule: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired
};

function getCentreById(centres, id){
  const centre = centres.filter(centre => centre.id == id);
  if(centre.length) return centre[0];

  return null;
}

function mapStateToProps(state, ownProps)
{
  const centreId = ownProps.params.id;

  let centre = {id:'', name:'', address:'', email:'', phone:'', line:''};

  if(centreId && state.centres.length > 0){
    centre = getCentreById(state.centres, centreId);
  }

  return {
      centre: centre,
      centreSchedule: centre.centreSchedule || [],
      activities: state.activities
  };
}

function mapDispatchToProps(dispatch)
{
  return {
      actions: bindActionCreators(centresActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeisureCentreSchedulePage);
