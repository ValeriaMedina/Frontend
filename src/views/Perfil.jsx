import React from "react";
// import ProfileForm from "../components/ProfileForm";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Perfil extends React.Component {
  state= {};

  handleChange = e => {
    // console.log({
    //   name:e.target.name,
    //   value: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submited")
    console.log(this.state)
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
            <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                    <h5 className="title">Chet Faker</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p className="description text-center">
                    "I like the way you work it <br />
                    No diggity <br />I wanna bag it up"
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Miembros Administrativos</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          DJ Khaled <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/joe-gardner-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          Creative Tim <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Flume <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Perfil</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Nombre</label>
                          <Input
                            onChange={this.handleChange}
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Apellido Paterno</label>
                          <Input
                            onChange={this.handleChange}
                            name="middleName"
                            type="text"
                            value={this.state.middleName}
                            required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Apellido Materno</label>
                          <Input
                            onChange={this.handleChange}
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            required 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Dirección</label>
                          <Input
                            onChange={this.handleChange}
                            defaultValue="Princesa Erendira"
                            name="adress"
                            type="text"
                            value={this.state.adress}
                            required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label>Colonia</label>
                          <Input
                            onChange={this.handleChange}
                            defaultValue="Valle Escondido"
                            name="colony"
                            type="text"
                            value={this.state.colony}
                            required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="2">
                        <FormGroup>
                          <label>#</label>
                          <Input
                            onChange={this.handleChange}
                            defaultValue="210"
                            name="houseNumber"
                            type="number"
                            value={this.state.houseNumber}
                            required 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Ciudad</label>
                          <Input
                            onChange={this.handleChange}
                            defaultValue=""
                            name="city"
                            type="text"
                            value={this.state.city}
                            required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            onChange={this.handleChange}
                            defaultValue=""
                            name="country"
                            type="text"
                            value={this.state.country}
                            required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Código Postal</label>
                          <Input
                          onChange={this.handleChange}
                          name="postalCode"
                          type="text"
                          value={this.state.postalCode}
                          required 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          onClick={this.handleClick}
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Guardar
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Perfil;
