console.log('connected')

let kittenBoxes = document.querySelectorAll('.kitten')
// tell js to go get every box with the class 'kitten'
console.log(kittenBoxes)
let featuredName = document.querySelector('#featuredName')
console.log(featuredName)

for (let box of kittenBoxes) {
    box.addEventListener('click', () => {
        console.log(box.innerText)
        // when the user clicks on the box, console log the name inside the box. The action inside the {} is called a callback
        let text = document.createTextNode(box.innerText)
        featuredName.appendChild(text)
    })
}

