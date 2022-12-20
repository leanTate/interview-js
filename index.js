import {AddCard} from './components/AddCard.js';
import {MainCard} from './components/MainCard.js';
import { pre } from './components/pre.js';
let root = document.getElementById("root");
let card = document.getElementsByClassName("MainCard");

let employeeString = localStorage.getItem("employee");
let employee= employeeString? JSON.parse(employeeString) : [];

root.appendChild(AddCard());
root.appendChild(pre())
root.appendChild(MainCard("list of employees"));
root.appendChild(MainCard("list of active employees"));
root.appendChild(MainCard("listado of inactive employees"));

employee.forEach((e) => {
  let text = document.createElement("p");
  text.classList.add("list-nodes");
  text.innerHTML = `${e.name} ${e.surname}`
  card[0].appendChild(text);
})

employee.filter(e => e.state ==="true").forEach(e=>{
  let text = document.createElement("p");
  text.classList.add("list-nodes");
  text.innerHTML = `${e.name} ${e.surname}`
  card[1].appendChild(text);
})

employee.filter(e => e.state ==="false").forEach(e=>{
  let text = document.createElement("p");
  text.classList.add("list-nodes");
  text.innerHTML = `${e.name} ${e.surname}`
  card[2].appendChild(text);
})

let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let name = document.getElementsByClassName("input")[0].value;
      let surname = document.getElementsByClassName("input")[1].value;
      let state = document.getElementsByClassName("select")[0].value;
      if(name === "" || surname === ""){return}
      let text = document.createElement("p");
      text.classList.add("list-nodes");
      text.innerHTML = `${name} ${surname}`
      employee.push({
        name: name,
        surname: surname,
        state: state
      })
      const employeeJSON = JSON.stringify(employee);
      localStorage.setItem("employee", employeeJSON);
      card[0].appendChild(text);
      console.log(employee);
    })
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let name = document.getElementsByClassName("input")[0].value;
      let surname = document.getElementsByClassName("input")[1].value;
      if(name === "" || surname === ""){return}
      let state = document.getElementsByClassName("select")[0].value;
      let text = document.createElement("p");
      text.classList.add("list-nodes");
      text.innerHTML = `${name} ${surname}`
      if(state === "true"){
        card[1].appendChild(text);
      }else{
        card[2].appendChild(text);
      }
    })