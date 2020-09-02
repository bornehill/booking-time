const users = [];

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

export function configureBookingTimeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
      return new Promise((resolve, reject) => {
          // wrap in timeout to simulate server api call
          setTimeout(() => {

              // authenticate
              if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                  // get parameters from post request
                  let params = JSON.parse(opts.body);

                  // find if any user matches login credentials
                  let filteredUsers = users.filter(user => {
                      return user.username === params.username && user.password === params.password;
                  });

                  if (filteredUsers.length) {
                      // if login details are valid return user details and fake jwt token
                      let user = filteredUsers[0];
                      let responseJson = {
                          id: user.id,
                          username: user.username,
                          firstName: user.firstName,
                          lastName: user.lastName,
                          token: 'fake-jwt-token'
                      };
                      resolve({ ok: true, json: () => Promise.resolve(responseJson) });
                  } else {
                      // else return error
                      reject('Username or password is incorrect');
                  }

                  return;
              }

              // get centres
              if (url.endsWith('/centres') && opts.method === 'GET') {
                  // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                  //if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                  if(centres){
                      resolve({ ok: true, json: () => Promise.resolve(centres)});
                  } else {
                      // return 401 not authorised if token is null or invalid
                      reject('Unauthorised');
                  }

                  return;
              }

              if (url.endsWith('/activities') && opts.method === 'GET') {
                if(activities){
                    resolve({ ok: true, json: () => Promise.resolve(activities)});
                } else {
                    // return 401 not authorised if token is null or invalid
                    reject('Unauthorised');
                }

                return;
              }

              if (url.endsWith('/centre/schedule') && opts.method === 'GET') {
                if(centreSchedules){
                  const centreSchedule = centreSchedules.filter(c => c.centreId == opts.body.get('id'));
                    resolve({ ok: true, json: () => Promise.resolve(centreSchedule)});
                } else {
                    // return 401 not authorised if token is null or invalid
                    reject('Unauthorised');
                }

                return;
              }
              // pass through any requests not handled above
              realFetch(url, opts).then(response => resolve(response));

          }, 500);
      });
  };
}
