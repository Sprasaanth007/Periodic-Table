function assignElements() {
  fetch('elements.json')
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 118; i++) {
        var element = document.getElementById(i)
        var divs = element.getElementsByTagName('div')
        divs[0].innerHTML = data.elements[i].symbol
        divs[1].innerHTML = data.elements[i].name
        divs[2].innerHTML = i + 1
      }
    })
}

assignElements()
