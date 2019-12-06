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
headerParent.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));

function Header() {

    // Defining Variables

    const headR = document.createElement ('div');
    const headSpan = document.createElement ('span');
    const headH1 = document.createElement ('h1');
    const hSpanClass = document.createElement ('span');

    // Element Structure

    head.appendChild(headSpan);
    head.appendChild(headH1);
    head.appendChild(hSpanClass);

    // Target Classes

    headR.classList.add('header');
    headSpan.classList.add('date');
    headH1.classList.add('h1');
    hSpanClass.classList.add('temp');

    // Heres the textContext

    headSpan.textContent = 'SMARCH 28, 2019';
    headH1.textContext = 'Lambda Times';
    hSpanClass = '98°';

    return headR
}
