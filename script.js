async function getUsers() {

    const status = document.getElementById("status");
    const usersDiv = document.getElementById("users");

    status.innerHTML = "Loading...";
    usersDiv.innerHTML = "";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        status.innerHTML = "";

        users.forEach(user => {

            usersDiv.innerHTML += `
                <div class="card">
                    <h3>${user.name}</h3>
                    <p>Email : ${user.email}</p>
                    <p>Phone : ${user.phone}</p>
                    <p>Company : ${user.company.name}</p>
                </div>
            `;

        });

    }
    catch(error){

        status.innerHTML = error.message;

    }

}