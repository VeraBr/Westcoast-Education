import { useContext, useRef } from "react"
import { Row } from "react-bootstrap";
import AuthContext from "../auth_context";

const AddCourse = (props) => {

  const courseNumberRef = useRef();
  const courseNameRef = useRef();
  const lengthRef = useRef();
  const descriptionRef = useRef();
  const startRef = useRef();

  const context = useContext(AuthContext);

  const onSaveHandler = (e) => {
    e.preventDefault();

    const course = {
      courseNumber: courseNumberRef.current.value,
      courseName: courseNameRef.current.value,
      length: lengthRef.current.value,
      description: descriptionRef.current.value,
      start: startRef.current.value
    };
    context.AddCourse(course);
    context.CloseModal();
    context.getCourses();
  };

  return (
    <form onSubmit={onSaveHandler}>
      <div className="form-control">
        <label htmlFor="courseNumber">Kursnummer</label>
        <input 
          id="courseNumber"
          placeholder="1234"
          ref={courseNumberRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="courseName">Kursnamn</label>
        <input 
          id="courseName"
          placeholder="JavaScript"
          ref={courseNameRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="length">Längd</label>
        <input 
          id="length"
          placeholder="4 veckor"
          ref={lengthRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="description">Beskrivning</label>
        <input 
          id="description"
          placeholder="Lorem ipsum..."
          ref={descriptionRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="start">Start</label>
        <input 
          id="start"
          placeholder="DD-MM-YYYY"
          ref={startRef}/>
      </div>

      <Row className="justify-content-center">
        <button className="btn add-btn">Spara</button>
      </Row>
      
    </form>
  )

}

export default AddCourse;