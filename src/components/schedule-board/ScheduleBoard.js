import React, {PropTypes} from 'react';
import getHours from 'date-fns/getHours';
import {mapTimeToDayHour} from '../../common/tools/mapTimeToDateTime';
import {groupBy} from '../../common/tools/groupBy';
import {WeekDays} from '../../common/types/WeekDays';
import { Link } from 'react-router';

const ScheduleBoard = ({schedule, activities}) => {
  schedule = mapTimeToDayHour(schedule);
  schedule.sort(orderByHour).sort(orderByWeekDay);
  const scheduleTable = schedule.length ? groupBy(schedule, "hour") : [];

  return (
    <table className="table-fixed">
      <thead>
        <tr className="bg-onyx-700 text-flame-600 font-light ">
          {Object.keys(WeekDays).map(day =>
            <th className="px-4 py-2" key={day}>{WeekDays[day]}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {Object.keys(scheduleTable).map(scheduleKey =>
          <tr key={scheduleKey}>
            {Object.keys(WeekDays).map((day, index) =>
              <td className="border border-onyx-700 px-4 py-2" key={scheduleKey+'-'+day}>
                {scheduleTable[scheduleKey].filter(c => c.weekDay == index).map(t =>
                    <div className="flex justify-center" key={t.time+'.'+t.weekDay}>
                      <span>{t.time} - {activities.find(a => a.id == t.activityId).name}</span>
                    </div>
                )}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
};

function orderByHour(a, b)
{
  if(getHours(a.dateStamp) < getHours(b.dateStamp))
  {
    return -1;
  }

  if(getHours(a.dateStamp) > getHours(b.dateStamp))
  {
    return 1;
  }

  return 0;
}

function orderByWeekDay(a, b)
{
  if(a.weekDay < b.weekDay)
  {
    return -1;
  }

  if(a.weekDay > b.weekDay)
  {
    return 1;
  }

  return 0;
}

ScheduleBoard.propTypes = {
  schedule: PropTypes.array.isRequired,
  activities: PropTypes.array.isRequired
};

export default ScheduleBoard;
