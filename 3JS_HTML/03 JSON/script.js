let data = [
    {firstName: "Hans", lastName: "Müller", age: 25},
    {firstName: "Peter", lastName: "Schmidt", age: 30},
    {firstName: "John", lastName: "Doe", age: 35},
    {firstName: "Jane", lastName: "Smith", age: 40},
    {firstName: "Max", lastName: "Johnson", age: 45},
    {firstName: "Anna", lastName: "Williams", age: 50},
    {firstName: "Julia", lastName: "Brown", age: 55},
    {firstName: "Tom", lastName: "Jones", age: 60},
    {firstName: "Sara", lastName: "Miller", age: 65},
    {firstName: "Mike", lastName: "Davis", age: 70},
    {firstName: "Emma", lastName: "Wilson", age: 28},
    {firstName: "Oliver", lastName: "Taylor", age: 33},
    {firstName: "Sophie", lastName: "Anderson", age: 42},
    {firstName: "Lucas", lastName: "Thomas", age: 37},
    {firstName: "Mia", lastName: "Martinez", age: 31},
    {firstName: "Noah", lastName: "Garcia", age: 44},
    {firstName: "Isabella", lastName: "Rodriguez", age: 39},
    {firstName: "Ethan", lastName: "Lee", age: 47},
    {firstName: "Ava", lastName: "Walker", age: 36},
    {firstName: "William", lastName: "Hall", age: 52}
]

function loadPeople(){
    let html = ""
    data.forEach(person => {
        const randomId = Math.floor(Math.random() * 1000);
        html += 
        `<div class='person'>
            <div class="name">${person.firstName} ${person.lastName}</div>
            <div class="age">Age: ${person.age}</div>
            <img src="https://picsum.photos/200/200?random=${randomId}">
        </div>`
    })
    document.getElementById("content").innerHTML = html
}

loadPeople()



