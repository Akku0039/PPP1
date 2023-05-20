
const users = [
    {id:1, name:"john", age:"18", profession:"developer"},
    {id:2, name:"jack", age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19", profession:"admin"}
  ];
  
  const addUser = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    
    if (name && age && profession) {
      const id = users.length + 1;
      users.push({id, name, age, profession});
      
      // update UI
      const userList = document.getElementById('user-list');
      const userCard = createUserCard({id, name, age, profession});
      userList.appendChild(userCard);
    }
  };
  
  const createUserCard = ({id, name, age, profession}) => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <div >ID: ${id}</div>
      <div>Name: ${name}</div>
      <div>Age: ${age}</div>
      <div>Profession: ${profession}</div>
      
    `;
    return card;
  };
  
  const filterUsers = () => {
    const profession = document.getElementById('profession').value;
    
    if (!profession) {
      alert('Please select a profession before filtering');
      return;
    }
    
    // filter users by profession
    const filteredUsers = users.filter(user => user.profession === profession);
    
    // update UI
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    filteredUsers.forEach(user => {
      const userCard = createUserCard(user);
      userList.appendChild(userCard);
    });
  };
  
  // add event listeners
  document.getElementById('add-user-btn').addEventListener('click', addUser);
  document.getElementById('filter-btn').addEventListener('click', filterUsers);

  
  