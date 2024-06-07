let ip = ""

function getLocation(ip) {
    var url = 'https://api.ipgeolocation.io/ipgeo?ip=' + ip;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  }

  async function getIP() {
    var ipAPI = 'https://api.ipify.org';
    fetch(ipAPI)
    .then(response => response.text())
    .then(data => {
      ip = data
      console.log('Votre adresse IP est : ' + data);
    });
  }

getIP().then(() => {
  getLocalisation(ip)
})
