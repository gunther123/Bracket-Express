export const getTournament = function (){

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://api.challonge.com/v1/tournaments.json?api_key=pstsO3jvS2TE7phZpFs0ZxiToi3KKywmaJymjuqa&created_after=2022-03-05", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
