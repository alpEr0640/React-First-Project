import React, { useState } from "react";
import {} from "bootstrap";
import UserList from "../Component/UserList";
export default function HomePage(props) {
  return (
    <div className="mx-auto">

      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <a className="navbar-brand ms-5" href="#">
            Navbar
          </a>
        </div>
      </nav>
      <UserList />
    </div>
  );
}
