export function authHeader() {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let userCookie = JSON.parse(sessionStorage.getItem('user'));

  if (userCookie) {
      return Object.assign({}, header, { 'Authorization': 'Bearer ' + userCookie });
  } else {
      return header;
  }
}
