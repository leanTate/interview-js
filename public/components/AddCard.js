export const AddCard= () => {
  const addCard = document.createElement("div");
  addCard.classList.add("addbar");
  addCard.innerHTML = `
    <form class="adder">
    <h2 class="title">Interview: Add a new user</h2>
      <input type="text" placeholder="Name" class="input">
      <input type="text" placeholder="Surname" class="input">
      <select class="select">
        <option value=true >Active</option>
        <option value=false >Inactive</option>
      </select>
      <button class="btn" id="add-btn" type="submit">Add</button>
    </form>
  `
  return addCard ;
  }
  