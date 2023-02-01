import { useContext, useRef } from "react"
import { Row } from "react-bootstrap";
import AuthContext from "../auth_context";

const AddTeacher = (props) => {

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const socialSecurityNumberRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const expertiseRef = useRef();

  const context = useContext(AuthContext);

  const onSaveHandler = (e) => {
    e.preventDefault();

    const teacher = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      socialSecurityNumber: socialSecurityNumberRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      expertise: expertiseRef.current.value,
    };
    context.AddTeacher(teacher);
    context.CloseModal();
    context.getTeachers();
  };

  return (
    <form onSubmit={onSaveHandler}>
      <div className="form-control">
        <label htmlFor="firstname">Förnamn</label>
        <input 
          id="firstname"
          placeholder="Anders"
          ref={firstnameRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="lastname">Efternamn</label>
        <input 
          id="lastname"
          placeholder="Andersson"
          ref={lastnameRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="socialSecurityNumber">Personnummer</label>
        <input 
          id="socialSecurityNumber"
          placeholder="xxxxxx-xxxx"
          ref={socialSecurityNumberRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="email">E-post</label>
        <input 
          id="email"
          placeholder="anders.andersson@wce.com"
          ref={emailRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="phoneNumber">Mobilnummer</label>
        <input 
          id="phoneNumber"
          placeholder="0701234567"
          ref={phoneNumberRef}/>
      </div>

      <div className="form-control">
        <label htmlFor="expertise">Expertområden</label>
        <input 
          id="expertise"
          placeholder="ex. React, CSS"
          ref={expertiseRef}/>
      </div>

      <Row className="justify-content-center">
        <button className="btn add-btn">Spara</button>
      </Row>
      
    </form>
  )

}

export default AddTeacher;