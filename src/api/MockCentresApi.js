
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

class CentresApi {
  static getAllCentres() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], centres));
      }, 2);
    });
  }
}

export default CentresApi;
