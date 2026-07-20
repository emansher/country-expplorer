let allUsers = [];

fetch("https://dummyjson.com/users")
.then(response => response.json())
.then(data => {

    allUsers = data.users;
    displayUsers(allUsers);

})
.catch(error => {

    document.getElementById("countries").innerHTML = `
    <div class="card">
        <h2>❌ Failed to load data</h2>
        <p>Please check your internet connection and try again.</p>
    </div>
    `;

});

function displayUsers(users){
    if (users.length === 0) {
    document.getElementById("countries").innerHTML = `
        <h2>No users found 😔</h2>
    `;
    return;
}

    let output="";

    users.forEach(user=>{

        output += `
        <div class="card">
            <h2>${user.firstName} ${user.lastName}</h2>
            <p>Age: ${user.age}</p>
            <p>Country: ${user.address.country}</p>
        </div>
        `;

    });

    document.getElementById("countries").innerHTML=output;
}

document.getElementById("search").addEventListener("input",function(){

    let searchText=this.value.toLowerCase();

    let filteredUsers=allUsers.filter(user=>

        user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.address.country.toLowerCase().includes(searchText)

    );

    displayUsers(filteredUsers);

});