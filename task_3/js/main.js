const containers = document.getElementsByClassName('container')[0]


for(let i=0; i<5; i++){
    const newElement = document.createElement('div');
    newElement.classList.add('element');
    const newIndex = document.createElement('span');
    newIndex.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    newElement.innerText = 'Element ';
    newIndex.innerText = i+1;
    newElement.append(newIndex);
    containers.append(newElement);
}