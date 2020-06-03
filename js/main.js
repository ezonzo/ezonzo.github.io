

function makeElement(type, props){
  e = document.createElement(type)
  props = props ? props : {}
  for (i in props){
    e[i] = props[i]
  }
  return e
}


function setupSearch() {
  categories.forEach(c => {
    document.getElementById("catselect").appendChild(
      makeElement('option', {text: c, value: c})
    )
  })


  $(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        submitted()
      }
    });
  });
}


function makeResultCard(r){
  let imgComponent = makeElement('img', {src: r.logo, className: 'fit-image'})
  let name = makeElement('p', {textContent: r.name, className: 'result-name'})
  let contents = makeElement('div', {className: 'result-contents'})
  let innerCard = makeElement('div', {className: 'result'})
  let card = makeElement('div', {className: 'col-sm-3'})
  let cardLink = makeElement('a', {href: r.catalog, target: '_blank'})
  card.appendChild(cardLink)
  cardLink.append(innerCard)
  innerCard.appendChild(contents)
  contents.appendChild(name)
  contents.appendChild(imgComponent)
  return card
}

function submitted(e) {
  let category = $("#catselect").val()
  let text = $("#search").val()
  var results = businesses.filter(b => {return b.category == category})

  var updatedResults = results.map( r => { 
    let updated = {...r}
    updated.catalog = r.catalog.replace("mazzi", text)
    return updated
  })

  console.log(updatedResults)
  $("#results").html("")
  let resultIntro = makeElement('div', {className: 'search-bar result-intro', innerHTML: 'Cerca su..'})
  $("#results").append(resultIntro)
  let row = makeElement('div', {className: 'row rowResult'})
  $("#results").append(row)
  updatedResults.forEach( r => {
    row.appendChild(makeResultCard(r))
  } )

}

function swapModal(mod1, mod2){
  $(mod1).modal('hide');
  $(mod2).modal('show');
}




setupSearch()

var selector = document.getElementById('sector')
categories.forEach( c => {
  selector.appendChild(makeElement('option', {text:c, value: c}))
} )
