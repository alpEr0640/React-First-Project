import React from "react";
import FormComponent from "./FormComponent";

export default function UserList(props) {
  const { kullanicilar } = props;
  console.log(kullanicilar);
  return (
    <div class="container mt-5">
      <FormComponent addUser />
      <table class="table ">
        <thead class="table-primary">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">UserName</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>
          {kullanicilar.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.Name}</td>
                <td>{user.Surname}</td>
                <td>{user.Username}</td>
                <td>
                  <button class="btn btn-primary">Edit</button>
                  &nbsp;
                  <button class="btn btn-warning">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
