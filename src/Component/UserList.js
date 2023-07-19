import React, { useState } from "react";
import FormComponent from "./FormComponent";
import EditComponent from "./EditComponent";
import { Alert } from "bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
export default function UserList() {
  const [states, setStates] = useState({
    user: {},
    title: "",
    visible: false,
  });
  const handleChange = (field, secondField, value) => {
    console.log("🚀 ~ file: UserList.js:13 ~ handleChange ~ value:", value);
    console.log("🚀 ~ file: UserList.js:13 ~ handleChange ~ field:", field);

    if (field === "user") {
      setStates({
        ...states,
        user: {
          ...states.user,
          [secondField]: value,
        },
      });
    }

    setStates({
      ...states,
      [field]: value,
    });
  };
  const handleEditUser = (user) => {
    setStates({
      user: user,
      title: user.Name,
      visible: true,
    });
  };
  function hide() {
    setStates({ ...states, visible: false });
  }

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [kullanicilar, setUsers] = useState([
    { id: uuidv4(), Name: "alper", Surname: "sonat", Username: "AlperSonat" },
    { id: uuidv4(), Name: "bugra", Surname: "sonat", Username: "BugraSonat" },
    { id: uuidv4(), Name: "Furkan", Surname: "Ersoz", Username: "FurkanErsoz" },
    { id: uuidv4(), Name: "Emir", Surname: "Durmaz", Username: "EmirDurmaz" },
  ]);

  const addUser = (Name, Surname, Username) => {
    if ((Name, Surname, Username)) {
      kullanicilar.push({
        id: uuidv4(),
        Name: Name,
        Surname: Surname,
        Username: Username,
      });
    } else {
      alert("boşlukları doldurunuz");
    }
  };
  const deleteUser = (id) => {
    const deneme = kullanicilar.filter((alper) => {
      return alper.id !== id;
    });
    setUsers(deneme);
    toast(`"${id}"kullanıcısı silindi`);
  };
  const updateUser = (id, Name, Surname, Username) => {
    if ((id, Name, Surname, Username)) {
      const users = [...states];
      let updatedUsers = kullanicilar.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            Name: Name,
            Surname: Surname,
            Username: Username
          };
        }
        return user;
      });
      setStates({
        kullanicilar: updatedUsers, 
      })
      }
    }
    
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
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
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
      <button
        onClick={() => handleShowModal()}
        className="btn btn-primary mb-2"
      >
        add
      </button>
      <EditComponent
        handleChange={handleChange}
        states={states}
        setStates={setStates}
        hide={hide}
        updateUser={updateUser}
        
      />
      <FormComponent
        addUser={addUser}
        showModal={showModal}
        setShowModal={handleShowModal}
        setCloseModal={handleCloseModal}
      />
      <ToastContainer />
    </div>
  );
}
