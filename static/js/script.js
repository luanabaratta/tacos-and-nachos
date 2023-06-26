const foodForms = document.querySelectorAll(".form");
for(let foodForm of foodForms) {
    foodForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let price = foodForm.price.value;
        let foodUnit = foodForm.unit.value;
        let total = price * foodUnit;

        alert("Total: " + total);
    })
}