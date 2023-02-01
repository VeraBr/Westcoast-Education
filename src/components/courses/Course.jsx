import { useContext } from "react";
import AuthContext from "../auth_context";

const Course = () => {

  const context = useContext(AuthContext);

  const course = context.course;

  return (
    <>
      <h2>{course.courseName}</h2>

      <p>Kursnummer: {course.courseNumber}</p>
      <p>Längd: {course.length}</p>
      <p>Kursstart: {course.start}</p>
      <p>Beskrivning: {course.description}</p>
    </>
  )
}

export default Course;