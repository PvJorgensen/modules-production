

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


/*
<table>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
</table>

*/
