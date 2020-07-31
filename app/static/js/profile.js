const draggables = document.querySelectorAll('.favorite');
let dragStartIndex;

//Add data-index to each list item
draggables.forEach((piece, index) => {
    console.log(piece);
    piece.setAttribute('data-index', index);
});


function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
    this.clasList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = draggables[fromIndex].draggables;
    const itemTwo = draggables[fomIndex].draggables;

    draggables[fromIndex].appendChild(itemTwo);
    draggables[toIndex].appendChild(itemOne);
}


function addEventListeners() {
   
    draggables.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}