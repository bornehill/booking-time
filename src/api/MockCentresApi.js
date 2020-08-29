
const centres = [
  {
      id: 1,
      name: "Spartan",
      address: "Platon #123",
      email: "sparthen@gmail.com",
      phone: "3326523415",
      line: "gym"
  },
  {
      id: 2,
      name: "Reckless",
      address: "Independencia #345",
      email: "reckless@gmail.com",
      phone: "3336523415",
      line: "gym"
  },
  {
      id: 3,
      name: "Ojocaliente",
      address: "Ojocaliente #637",
      email: "ojocaliente@gmail.com",
      phone: "4496523415",
      line: "pool"
  },
  {
      id: 4,
      name: "Andrade",
      address: "J. Palomino #123",
      email: "andrade_pool@gmail.com",
      phone: "4496523415",
      line: "pool"
  }
];

const activities = [
  {
    id: 1,
    name: 'Crossfit'
  },
  {
    id: 2,
    name: 'Swiming'
  },
  {
    id: 3,
    name: 'Waterpool'
  },
  {
    id: 4,
    name: 'Zumba'
  },
  {
    id: 5,
    name: 'Box'
  },
  {
    id: 6,
    name: 'Gym'
  },
  {
    id: 7,
    name: 'Pool Dance'
  },
  {
    id: 8,
    name: 'Futball'
  },
  {
    id: 9,
    name: 'Basquetball'
  },
  {
    id: 10,
    name: 'Painting'
  }
];

const centreSchedules = [
  {
    centreId: 1,
    weekDay: 1,
    activityId: 1,
    time: "08:00"
  },
  {
    centreId: 1,
    weekDay: 2,
    activityId: 1,
    time: "08:00"
  },
  {
    centreId: 1,
    weekDay: 3,
    activityId: 1,
    time: "08:00"
  },
  {
    centreId: 1,
    weekDay: 4,
    activityId: 1,
    time: "08:00"
  },
  {
    centreId: 1,
    weekDay: 5,
    activityId: 1,
    time: "08:00"
  },
  {
    centreId: 1,
    weekDay: 6,
    activityId: 1,
    time: "10:00"
  },
  {
    centreId: 2,
    weekDay: 1,
    activityId: 1,
    time: "09:00"
  },
  {
    centreId: 2,
    weekDay: 3,
    activityId: 1,
    time: "09:00"
  },
  {
    centreId: 2,
    weekDay: 5,
    activityId: 1,
    time: "09:00"
  },
  {
    centreId: 3,
    weekDay: 1,
    activityId: 2,
    time: "06:00"
  },
  {
    centreId: 3,
    weekDay: 3,
    activityId: 2,
    time: "06:00"
  },
  {
    centreId: 3,
    weekDay: 5,
    activityId: 2,
    time: "06:00"
  },
  {
    centreId: 4,
    weekDay: 3,
    activityId: 2,
    time: "07:00"
  },
  {
    centreId: 4,
    weekDay: 4,
    activityId: 2,
    time: "07:00"
  },
  {
    centreId: 4,
    weekDay: 5,
    activityId: 2,
    time: "07:00"
  }
];

class CentresApi {
  static getAllCentres() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], centres));
      }, 2);
    });
  }

  static getActivities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], activities));
      }, 2);
    });
  }

  static getCentreSchedule(centre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const centreSchedule = centreSchedules.filter(c => c.centreId === centre.id);
        resolve(Object.assign([], centreSchedule));
      }, 2);
    });
  }
}

export default CentresApi;
