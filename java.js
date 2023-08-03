const name = document.querySelector(".name");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
var button = document.querySelector(".Button");
button.addEventListener('click', (e) => {
    e.preventDefault();
    name.innerHTML = "Loading...";
    weight.innerHTML = "Loading...";
    height.innerHTML = "Loading...";
    console.log("HEllo");
    let ab = Math.ceil(Math.random() * 30);
    fetch(`https://swapi.dev/api/people/${ab}/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            name.innerHTML = data['name'];
            weight.innerHTML = data['skin_color'];
            height.innerHTML = data['height'];
        })
})