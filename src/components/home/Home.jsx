import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";


const Home = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/courses")
    .then((response) => response.json())
    .then((data) => setCourses(data));
  }, [])

  return(
    <Container>
      <Row>
        <Col xs={12}>
          <h2>Anmäl dig till någon av våra utbildningar</h2>
        </Col>
      </Row>

      <Row>
        {courses.map((course, i) => {
          return (
            <Col xs={12} md={4} key={i}>
              <StyledArticle className="card">
                <StyledDiv>
                  <h3>{course.courseName}</h3>
                  <p>Startdatum: {course.start}</p>
                </StyledDiv>
              </StyledArticle>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Home;

const StyledArticle = styled.article`
  position: relative;
  height: 200px;
  padding: 40px 0px 10px 0px;
  margin: 20px 0px 20px 0px;
`

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100%;
`