var polya = document.getElementById('polya')
var polyaAppend = document.getElementsByClassName('polyaAppend')[0]

polya.addEventListener('submit', function(event) {
  event.preventDefault()
  // polyaAppend.innerText = ''
  if (true) {
    // Rephrase
    var appending = document.getElementsByClassName('appending')
    var input = event.target.elements.rephrase.value
    var headingFour = document.getElementById('appending')
    headingFour.innerHTML = "Your problem rephrased: " + input
    headingFour.type = 'text'
    headingFour.className = 'rephrase'

    // polyaAppend.appendChild(headingFour)
    // Rephrase

  }
  if (true) {
    // all solutions

    var input = event.target.elements.solution.value
    var headingFour = document.getElementById('appending-sol')
    headingFour.innerText = "A List of all your possible solutions: " + input
    headingFour.type = 'text'
    headingFour.className = 'solution'

    // all solutions

  }
  if (true) {
    // all solutions

    var input = event.target.elements.solutions.value
    var headingFour = document.getElementById('appending-sol2')
    headingFour.innerText = input
    headingFour.type = 'text'
    headingFour.className = 'solutions'

    // all solutions

  }
  if (true) {
    // all solutions

    var input = event.target.elements.solutioning.value
    var headingFour = document.getElementById('appending-sol3')
    headingFour.innerText = input
    headingFour.type = 'text'
    headingFour.className = 'solutioning'

    // all solutions

  }
  if (true) {
    // all solutions
    var appending3 = document.getElementsByClassName('appending3')
    var input = event.target.elements.unknowing.value
    var headingFour = document.getElementById('appending3')
    headingFour.innerText = "List of your unknowns: " + input
    headingFour.type = 'text'
    headingFour.className = 'unknowing'

    // all solutions
  }
  if (true) {
    // all solutions
    var appending4 = document.getElementsByClassName('appending4')
    var input = event.target.elements.data.value
    var headingFour = document.getElementById('appending4')
    headingFour.innerText = "What is your current data: " + input
    headingFour.type = 'text'
    headingFour.className = 'data'

    // all solutions

  }
  if (true) {
    // all solutions
    var appending5 = document.getElementsByClassName('appending5');
    var input = event.target.elements.condition.value;
    var headingFour = document.getElementById('appending5');
    headingFour.innerText = "What are your conditions: " + input;
    headingFour.type = 'text';
    headingFour.className = 'condition';

    // all solutions

  }
  if (true) {
    // all solutions
    var appending6 = document.getElementsByClassName('appending6');
    var input = event.target.elements.similar.value;
    var headingFour = document.getElementById('appending6');
    headingFour.innerText = "This is also similar: " + input;
    headingFour.type = 'text';
    headingFour.className = 'similar';

    // all solutions

  }
  if (true) {
    // all solutions
    var appending7 = document.getElementsByClassName('appending7');
    var input = event.target.elements.related.value;
    var headingFour = document.getElementById('appending7');
    headingFour.innerText = "This is also related: " + input;
    headingFour.type = 'text';
    headingFour.className = 'related';

    // all solutions

  }
  if (true) {
    // all solutions
    var appending8 = document.getElementsByClassName('appending8');
    var input = event.target.elements.solved.value;
    var headingFour = document.getElementById('appending8');
    headingFour.innerText = "Related solved problem: " + input;
    headingFour.type = 'text';
    headingFour.className = 'solved';

    // all solutions

  }
  if (true) {
    // all solutions
    var appending9 = document.getElementsByClassName('appending9');
    var input = event.target.elements.restate.value;
    var headingFour = document.getElementById('appending9');
    headingFour.innerText = "Is the problem the same? " + input;
    headingFour.type = 'text';
    headingFour.className = 'restate';

    // all solutions

  }
})
