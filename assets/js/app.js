import { showAllUsers } from "./modules/view/userViews.js";

// hoisting to window level.
window._myEventListners = { userClicked };
let myVar = 'test';
// globals ----------------------------------------------------------------


// fetch users  model code ------------------------------------------------
fetchUsers();


function fetchUsers() {
    fetch('https://dummyjson.com/users?limit=0')

        .then((response) => {
            // error check på netværk response
            if (!response.ok) {
                throw new Error("not ok!" + response.status);
            }

            // konverter response til json data objekt
            let data = response.json();
            return data;

        })

        .then((data) => {
            // do stuff
            recivedUsers(data.users);
        })

        .catch((error) => {
            console.log(error.message);
        });
}


// controller codes ------------------------------------------------
function recivedUsers(myUsers) {
    console.log(myUsers[0]);
    showAllUsers(myUsers, 'app', true);


}


function userClicked(myId) {
    console.warn(myId);
}


