import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {

  return (
    <Header>
      <Container>
        <Row className="justify-content-between align-items-center ">
          <Col xs={12} md={7}>
            <h1 className="title">Westcoast Education</h1>
          </Col>

          <Col xs={12} md={5}>
            <nav>
              <Ul>
                <Row className="justify-content-between">
                  <Col xs={4}>
                    <Li>
                      <Link to="/">Hem</Link>
                    </Li>
                  </Col>
                  <Col xs={4}>
                    <Li>
                      <Link to="/courses">Kurser</Link>
                    </Li>
                  </Col>
                  <Col xs={4}>
                    <Li>
                      <Link to="/teachers">Lärare</Link>
                    </Li>
                  </Col>
                </Row>
              </Ul>
            </nav>
          </Col>
        </Row>

        <Row>
        </Row>
      </Container>
    </Header>
  )
}

export default Navbar;

const Ul = styled.ul`
  padding: 0px;
  margin-bottom: 0px;
`

const Li = styled.li`
  list-style: none;
  display: inline-block;

  a {
    text-decoration: none;
    color: #5c8a8a;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  a:hover {
    color: #141f1f;
  }
`

const Header = styled.header`
  position: fixed;
  z-index: 10;
  width: 100vw;
  padding-top: 40px;
  background: rgba(247, 252, 252, 0.9);
  margin-bottom: 40px;
  height: 220px;
  text-align: center;

  .title {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    height: 160px;
    text-align: left;

    .title {
      margin-bottom: 15px;
    }
  }

`
