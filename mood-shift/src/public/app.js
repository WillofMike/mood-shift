var endpoint = 'https://galvanize-cors-proxy.herokuapp.com/http://www1.wolframalpha.com/api/v2/query?appid=HYG38L-H685248YYJ&output=json&input='

var form = document.getElementById('form-id')
var body = document.getElementsByTagName('body')[0]
var heading = document.createElement('h1')
var content = document.getElementsByClassName('results')[0]


form.addEventListener('submit', function(event){
  event.preventDefault()
  content.innerHTML = ''

var searchTerm = event.target.elements.submit.value
fetch(endpoint + searchTerm)
  .then(function(response){
    return response.json()
      .then(function(wolfData){
        // console.log(wolfData.queryresult.pods[i].subpods[i].img.src);
        for (var i = 0; i < wolfData.queryresult.pods.length; i++) {
          // console.log(wolfData.queryresult.pods[i].subpods);
          var headingTwo = document.createElement('h2')
          headingTwo.innerHTML = wolfData.queryresult.pods[i].subpods[0].plaintext
          var photo = document.createElement('img')
          photo.src = wolfData.queryresult.pods[i].subpods[0].img.src
          // photo.className = 'ui card'
          // headingTwo.className = 'ui card'
          //
          content.append(headingTwo,photo)
        }
      })
  }).catch(function(err){
    console.log(err);
  })
  return form.reset()
})
