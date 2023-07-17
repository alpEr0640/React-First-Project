import React from "react";
import {} from "bootstrap";
import UserList from "../Component/UserList";
import { v4 as uuidv4 } from "uuid";
export default function HomePage(props) {
  const kullanicilar = [
    { id: uuidv4(), Name: "alper", Surname: "sonat", Username: "AlperSonat" },
    { id: uuidv4(), Name: "bugra", Surname: "sonat", Username: "BugraSonat" },
    { id: uuidv4(), Name: "Furkan", Surname: "Ersoz", Username: "FurkanErsoz" },
    { id: uuidv4(), Name: "Emir", Surname: "Durmaz", Username: "EmirDurmaz" },
  ];
 const addUser = (Name, Surname, Username) => {
    if ((Name, Surname, Username)) {
      const user = [kullanicilar]
      kullanicilar.push
        ({
        id: uuidv4(),
        Name: Name,
        Surname: Surname,
        Username:Username,
      })
   }
   else{
      alert("boşlukları doldurunuz");
   }
   
  };
  
  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <a className="navbar-brand ms-5" href="#">
            Navbar
          </a>
        </div>
      </nav>
      <UserList kullanicilar={kullanicilar} addUser={addUser} />
    </div>
  );
}
