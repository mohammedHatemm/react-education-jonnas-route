import React from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FrindesList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSPlitBill />
    </div>
  );
}

function FrindesList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">you own {friend.name}</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owns you</p>}
      {friend.balance === 0 && <p>you and your {friend.name} are even</p>}
      <Button>selected</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input type="text" />
      <label>Friend Image</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSPlitBill() {
  return (
    <div>
      <h2>form split bill</h2>
    </div>
  );
}
