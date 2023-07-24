import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

export default function EditComponent(props) {
  const {
    kullanicilar,
    editUser,
    setUsers,
    states,
    hide,
    handleChange,
    updateUser,
    user,
  } = props;
    console.log("🚀 ~ file: EditComponent.js:29 ~ EditComponent ~ states:", states)
  const [id , setId] = useState(null)
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setusername] = useState("");
  const clear = () => {
    setId();
    setName("");
    setSurname("");
    setusername("");
    
  };
  const cancel = () => {
    clear();
    hide();
  }
  const updated = () => {
    updateUser(
      states.user.id,
      states.user.Name,
      states.user.Surname,
      states.user.Username,
    );
    
    clear();
    hide();
  };

  return (
    <div>
      <Modal
        isOpen={states.visible}
        modalTransition={{ timeout: 400 }}
        backdropTransition={{ timeout: 100 }}
      >
        <ModalHeader>{states.title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Row>
                <Col xs="6">
                  <Label for="Name">burası label </Label>
                  <Input
                    id="Name"
                    onChange={(event) =>
                      handleChange("user", "Name", event.target.value)
                    }
                    value={states.user.Name}
                  ></Input>
                </Col>
                <Col xs="6">
                  <Label for="Surname">Surname</Label>
                  <Input
                    value={states.user.Surname}
                    onChange={(event) =>
                      handleChange("user", "Surname", event.target.value)
                    }
                    type="text"
                    name="surname"
                    id="Surname"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <Label for="Username">Username</Label>
                  <Input
                    value={states.user.Username}
                    onChange={(event) =>
                      handleChange("user", "Username", event.target.value)
                    }
                    type="text"
                    name="Username"
                    id="Username"
                    required
                  />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => updated()}>
            Update
          </Button>
          <Button color="secondary" onClick={() => cancel()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
