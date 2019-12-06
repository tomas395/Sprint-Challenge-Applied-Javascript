// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// Parental things

const headerParent = document.querySelector('.header-container');
const headerInfo = Header();
headerParent.appendChild(headerInfo);

function Header(){

    // The Main Variables
    const headR = document.createElement('div');
    const headSpan = document.createElement('span');
    const headH1 = document.createElement('h1');
    const hSpanClass = document.createElement('span');

    // Element Structure 
    headR.appendChild(headSpan);
    headR.appendChild(headH1);
    headR.appendChild(hSpanClass);

    // Add Classes
    headR.classList.add('header');
    headSpan.classList.add('date');
    hSpanClass.classList.add('temp');

    // Header textContent
    headSpan.textContent = 'MARCH 28, 2019';
    headH1.textContent = 'Lambda Times';
    hSpanClass.textContent = '98°';

// ↓↓↓ DONT FORGET TO RETURN THE HEADER ↓↓↓
    return headR;
}



 


