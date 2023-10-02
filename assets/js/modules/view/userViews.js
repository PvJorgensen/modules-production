

export function getAllUsers(userData, displayElement, buttonIf) {

    // find DOM element
    let myApp = document.getElementById(displayElement);

    // clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';

    userData.forEach(userObject => {
        myUserHtml += `<tr><td>${userObject.firstName}</td><td>${userObject.lastName}</td><td>edit</td></tr>`;
    });

    myApp.innerHTML = `<h2>Users</h2><table><tr><th>Fornavn</th><th>efternavn</th><th>edit</th></tr>${myUserHtml}</table>`;

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
