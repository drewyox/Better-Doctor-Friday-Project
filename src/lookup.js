
class Usersymp {

  let request = new XMLHttpRequest();
  const url = `https://developer.betterdoctor.com/2016-03-01/&appid=API-KEY-GOES-HERE,`;

  request.onreadystatechange = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();
}
