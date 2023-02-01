import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../auth_context";
import Modal from "../UI/Modal";
import AddCourse from "./AddCourse";
import { Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";


const CourseList = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.getCourses();
  }, []);

  const ShowAddCourseHandler = () => {
    context.setShowModal(true);
  }

  return (
    <>
      {context.showModal && (
        <Modal title="Lägg till kurs" form={<AddCourse />} />
      )}
      <Button variant="primary" className="btn" onClick={ShowAddCourseHandler}>Lägg till kurs</Button>

      <Container className="mt-40">
        <h2 className="mb-0">Våra kurser</h2>
        <Row>
            {context.courseList?.map((course, i) => {
                return (
                  <Col key={i} xs={12} md={4}>
                    <StyledDiv className="card">
                      <div>
                        <h3 className="mt-40 mb-20">{course.courseName}</h3>
                        <p>Kursnummer: {course.courseNumber}</p>
                        <p>Längd: {course.length}</p>
                        <p>Startdatum: {course.start}</p>
                        <Row className="justify-content-center">
                        <Col xs={8} className="text-center">
                          <Link to={`/courses/${course.id}`} className="btn read-more" onClick={() => { context.setCourse(course)}}>
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

export default CourseList;

const StyledDiv = styled.div`
  padding: 10px;
  border: none;
  height: 300px;
`