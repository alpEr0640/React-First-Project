import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
  FormGroup,
  Row,
  Col,
} from "reactstrap";

export default function (props) {
  const { addUser, kullanicilar, setShowModal,showModal, setCloseModal } = props;
  const NewUser = {
    name: "",
    surname: "",
    username: "",
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setusername] = useState("");

  const submit = () => {
    addUser(name, surname, username);
    setCloseModal();
  };

  return (
    <div>


      <div>
        <Modal
          isOpen={showModal}
          modalTransition={{ timeout: 400 }}
          backdropTransition={{ timeout: 100 }}
        >
          <ModalHeader>Tablo</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Row>
                  <Col xs="6">
                    <Label for="Name">Name - {name}</Label>
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="Name"
                      required
                    />
                  </Col>
                  <Col xs="6">
                    <Label for="Surname">Surname - {surname}</Label>
                    <Input
                      type="text"
                      name="surname"
                      id="Surname"
                      onChange={(a) => setSurname(a.target.value)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="Username">Username- {username}</Label>
                    <Input
                      type="text"
                      name="Username"
                      id="Username"
                      onChange={(c) => setusername(c.target.value)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => submit()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={() => setCloseModal()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
