const optionDrop = document.getElementById("option-dropdown");

function optionDropClickHandler() {
    optionDrop.classList.toggle('hidden');
}

const navDrop = document.getElementById('dropdown-list');
console.log(navDrop);
const navIconOpen = document.getElementById("dropdown-img-open");
console.log(navIconOpen);
const navIconClosed = document.getElementById("dropdown-img-closed");
console.log(navIconClosed);

function navDropClickHandler() {
  navDrop.classList.toggle('hidden');
  navIconClosed.classList.toggle('hidden');
  navIconOpen.classList.toggle('hidden');
}

navDrop.addEventListener('click', navDropClickHandler);
optionDrop.addEventListener('click', optionDropClickHandler);

// window.onclick = function(event) {
//     navDrop.classList.add("hidden");
//     optionDrop.classList.add("hidden");
//     navIconOpen.classList.add("hidden");
//     navIconClosed.classList.remove("hidden");
// }


// toggleDropdownNav = (idOfTheDiv) => {
//     document.getElementById(idOfTheDiv).classList.toggle("hidden");

//     document.getElementById('dropdown-img-open').classList.toggle("hidden");
//     document.getElementById('dropdown-img-closed').classList.toggle("hidden");
// }
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.classList.contains('dropdown-ico-0')) {
//         var openDropdown = document.getElementById("dropdown-list");
//         if (!openDropdown.classList.contains('hidden')) {
//             openDropdown.classList.add('hidden');
//         }
//     }

//     if (!event.target.classList.contains('dropdown-ico-0')) {
//         var openDropdown = document.getElementById("dropdown-list");
//         if (!openDropdown.classList.contains('hidden')) {
//             openDropdown.classList.add('hidden');
//         }
//     }
// }

/* Global Window Event Register
*   - Listens for click events and holds current event target
*
*/

/* Dropdown Handler
*   - Click Button -> Toggle Dropdown
*   - If click occurs on another button -> close dropdown
*/

