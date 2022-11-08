const containers = document.getElementsByClassName('container')[0]
for(let i=0; i<5; i++){
    const newElement = document.createElement('div')
    newElement.classList.add('element')
    newElement.innerText = 'Element ' + [i+1]
    containers.append(newElement)
}