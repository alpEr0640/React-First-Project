import React, { useState } from "react";
import FormComponent from "./FormComponent";
import EditComponent from "./EditComponent";
import { Alert } from "bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import { clear } from "@testing-library/user-event/dist/clear";
export default function UserList() {
  const [states, setStates] = useState({
    user: {},
    title: "",
    visible: false,
  });

  const handleChange = (field, secondField, value) => {
    if (field === "user") {
      setStates({
        ...states,
        user: {
          ...states.user,
          [secondField]: value,
        },
      });
      return;
    }

    setStates({
      ...states,
      [field]: value,
    });
  };
  const handleEditUser = (value) => {
    setStates({
      user: value,
      title: value.Name,
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
    { id: uuidv4(), Name: "Emir", Surname: "Durmaz", Username: "EmirDurmaz" },
    { id: uuidv4(), Name: "Furkan", Surname: "Ersoz", Username: "FurkanErsoz" },
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
    toast(`"${deneme.name}"kullanıcısı silindi`);
    setUsers(deneme);
  };

  const updateUser = (id, Name, Surname, Username) => {
    
    if (id && Name && Surname && Username) {
      console.log("fonksiyona girildi");
      let deneme = kullanicilar.filter((i) => {
        return i.id !== id;
      });
     
      deneme.push({
        id: id,
        Name: Name,
        Surname: Surname,
        Username: Username,
      });
      console.log("🚀 ~ file: UserList.js:93 ~ updateUser ~ deneme:", deneme)
      setUsers(deneme);
      
    }
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
        kullanicilar={kullanicilar}
        handleChange={handleChange}
        states={states}
        setStates={setStates}
        hide={hide}
        setUsers={setUsers}
        updateUser={updateUser}
        user={states.user}
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
