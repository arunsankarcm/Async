// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// let names = [];

// const fetchUsersData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
    // data.forEach((obj) => {
    //   let name = obj.name;
    //   names.push(name);
    // });
//   } catch (error) {
//     console.error("Error fetching user data", error);
//   }
// };

// fetchUsersData();

// const user_name = document.getElementById("name");

// const displayNames = async () => {
//   await fetchUsersData();
//   console.log(names);
//   user_name.textContent = "";
//   for (let i = 0; i < names.length; i++) {
//     user_name.textContent = names[i];
//   }
// };



// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fetchUsersData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
  
      const userCardsContainer = document.querySelector(".user-cards"); 
      userCardsContainer.innerHTML = '';
  
      data.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const nameElement = document.createElement("h3");
        nameElement.textContent = `Name: ${user.name}`;
        card.appendChild(nameElement);
  
        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${user.email}`;
        card.appendChild(emailElement);
  
        const phoneElement = document.createElement("p");
        phoneElement.textContent = `Phone: ${user.phone}`;
        card.appendChild(phoneElement);
  
        const websiteElement = document.createElement("p");
        websiteElement.textContent = `Website: ${user.website}`;
        card.appendChild(websiteElement);
  
        userCardsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };
  
  fetchUsersData();
  

