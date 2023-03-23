// const a = document.querySelector("a");
const a = document.querySelector("a");
console.log(a);
a.setAttribute("herf", "http://www.google.co.th");
a.setAttribute("target", "_blank");

const result = { first_name: "Kanyarat", last_name: "Intarat" };
const fullName = `${result.first_name} ${result.last_name}`;

const p = document.querySelector("p");
p.innerHTML = fullName;
