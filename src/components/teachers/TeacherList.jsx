import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../auth_context";
import Modal from "../UI/Modal";
import { Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import AddTeacher from "./AddTeacher";


const TeacherList = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.getTeachers();
  }, []);

  const ShowAddTeacherHandler = () => {
    context.setShowModal(true);
  }

  return (
    <>
      {context.showModal && (
        <Modal title="Lägg till lärare" form={<AddTeacher />} />
      )}
      <Button variant="primary" className="btn" onClick={ShowAddTeacherHandler}>Lägg till lärare</Button>

      <Container className="mt-40">
        <h2 className="mb-0">Våra lärare</h2>
        <Row>
            {context.teacherList?.map((teacher, i) => {
                return (
                  <Col key={i} xs={12} md={4}>
                    <StyledDiv className="card">
                      <div>
                        <h3 className="mt-40 mb-20">{teacher.firstname} {teacher.lastname}</h3>
                        <p>Personnummer: {teacher.socialSecurityNumber}</p>
                        <p>E-post: {teacher.email}</p>
                        <p>Mobilnummer: {teacher.phoneNumber}</p>
                        <Row className="justify-content-center">
                        <Col xs={8} className="text-center">
                          <Link to={`/teachers/${teacher.id}`} className="btn read-more" onClick={() => { context.setTeacher(teacher)}}>
                            Läs mer
                          </Link>
                        </Col>
                        </Row>
                      </div>
                    </StyledDiv>
                  </Col>
                )
            })}
        </Row>
      </Container>
    </>
  );
};

export default TeacherList;

const StyledDiv = styled.div`
  padding: 10px;
  border: none;
  height: 300px;
`
