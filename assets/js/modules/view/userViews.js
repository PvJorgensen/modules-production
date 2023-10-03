

export function showAllUsers(userData, displayElement, buttonIf) {

    // find DOM element
    let myApp = document.getElementById(displayElement);


    // clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';
    let myEditButton = '';



    userData.forEach((userObject) => {


        if (buttonIf) {

            myEditButton = `<button onclick="window._myEventListners.userClicked(${userObject.id})">edit</button>`;
            //myEditButton = `<button onclick="showUser(${userObject.id})">edit</button>`;
        }

        myUserHtml += `<tr><td>${userObject.firstName}</td><td>${userObject.lastName}</td><td>${myEditButton}</td></tr>`;
    });

    myApp.innerHTML = `<section class="userViews"><h2>Users</h2><table><tr><th>Fornavn</th><th>efternavn</th><th></th></tr>${myUserHtml}</table></section>`;

}



export function showUser(myUser, displayElement, returnButton) {

    let myApp = document.getElementById(displayElement);
    // clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';
    let myEditButton = '';

    // iterate over the user object

    for (const key in myUser) {

        console.log(`${key}: ${myUser[key]}`);

        myUserHtml += `<tr><td>${key}: </td><td>${myUser[key]}</td></tr>`;
    }

    if (returnButton) {
        myEditButton = `<button onclick="window._myEventListners.userViewDone()">edit</button>`;
    }

    myApp.innerHTML = `<section><h2>User</h2><table>${myUserHtml}</table>${myEditButton}</section>`;





}