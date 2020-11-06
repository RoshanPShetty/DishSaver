document.getElementById("back-to-food").addEventListener('click', function() {
    window.location.href = "dc-todaysfood.html";
});

window.addEventListener("load", function() {
    const table = document.querySelector("table");
    const thead = table.createTHead();
    const header = thead.insertRow();
    
    const nameHead = document.createElement("th");
    nameHead.classList.add("infocol");
    const nameHeadText = document.createTextNode("Name");
    nameHead.appendChild(nameHeadText);
    header.appendChild(nameHead);

    const categoryHead = document.createElement("th");
    categoryHead.classList.add("infocol");
    const categoryHeadText = document.createTextNode("Category");
    categoryHead.appendChild(categoryHeadText);
    header.appendChild(categoryHead);

    const amountHead = document.createElement("th");
    amountHead.classList.add("infocol");
    const amountHeadText = document.createTextNode("Amount");
    amountHead.appendChild(amountHeadText);
    header.appendChild(amountHead);

    const selectHead = document.createElement("th");
    selectHead.classList.add("selectcol");
    const selectHeadText = document.createTextNode("Select");
    selectHead.appendChild(selectHeadText);
    header.appendChild(selectHead);
    
    fetch('https://dishsaver.herokuapp.com/viewrequests')
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                const row = table.insertRow();

                const name = row.insertCell();
                const nameText = document.createTextNode(data[i].name);
                name.appendChild(nameText);

                const category = row.insertCell();
                const categoryText = document.createTextNode(data[i].category);
                category.appendChild(categoryText);

                const amount = row.insertCell();
                const amountText = document.createTextNode(data[i].amount);
                amount.appendChild(amountText);
            }
        });
});