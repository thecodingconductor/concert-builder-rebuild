const draggables = document.querySelectorAll('.favorite');
let dragStartIndex;

//Add data-index to each list item
draggables.forEach((piece, index) => {
    console.log(piece);
    piece.setAttribute('data-index', index);
});

addEventListeners();


function dragStart() {
    console.log('event', 'drag start');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex)
}

function dragEnter() {
    console.log('event', 'drag enter');
    this.classList.add('over');
}

function dragLeave() {
    console.log('event', 'drag leave');
    this.classList.remove('over');
}

function dragOver() {
    
    const dragEndIndex = +this.getAttribute('data-index');
    console.log(dragEndIndex);
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = draggables[fromIndex].draggables;
    const itemTwo = draggables[fomIndex].draggables;

    draggables[fromIndex].appendChild(itemTwo);
    draggables[toIndex].appendChild(itemOne);
}

function dragDrop() {
    console.ll
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