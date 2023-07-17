import React, { useState } from "react";
import FormComponent from "./FormComponent";
import { Alert } from "bootstrap";

export default function UserList(props) {
  const { kullanicilar, addUser } = props;
  console.log(kullanicilar);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container mt-5">
      {kullanicilar.length > 0 ? (
        <table className="table ">
          <thead className="table-primary">
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
                    <button className="btn btn-primary">Edit</button>
                    &nbsp;
                    <button className="btn btn-warning">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-primary" role="alert">
          Tabloya Ekleme Yapmayi Unuttunuz
        </div>
      )}
      <button onClick={() => handleShowModal()} className="btn btn-primary mb-2">
        add
      </button>

      <FormComponent
        addUser={addUser}
        showModal={showModal}
        setShowModal={handleShowModal}
        setCloseModal={handleCloseModal}
      />
    </div>
  );
}
