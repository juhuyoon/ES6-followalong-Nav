// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
//get all the triggers that need the hover behind it. 

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight'); //adding a class of highlight to the element highlight
document.body.append(highlight);

function highlightLink() {
    console.log(this);
    const linkCoords = this.getBoundingClientRect(); //the coordinates of where the a href is at. 
    console.log(linkCoords);
    const coords = { //to have the highlight work when page is scrolled down
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY, 
        left: linkCoords.left + window.scrollX
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`; //gives you the highlights sizes corresponding.
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink)); //like mouseover
