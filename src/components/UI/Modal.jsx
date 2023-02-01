
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import AuthContext from "../auth_context";
import classes from './Modal.module.css';

const Overlay = () => {
  const context = useContext(AuthContext);
  return <div className={classes.overlay} onClick={() => context.CloseModal(true)}></div>;
};

const ModalOverlay = (props) => {
  console.log(props)

  return (
    <div className={classes.modal}>
      <Container>
        <Row className="text-center">
          <h2 className="form-title">{props.title}</h2>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10}>
            {props.form}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector("#overlay-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} form={props.form}>
        </ModalOverlay>,
        document.querySelector("#modal-root"),
      )}
    </>
  )
}

export default Modal;