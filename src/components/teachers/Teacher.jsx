import { useContext } from "react";
import AuthContext from "../auth_context";

const Teacher = () => {

  const context = useContext(AuthContext);

  const teacher = context.teacher;

  return (
    <>
      <h2>{teacher.firstname} {teacher.lastname}</h2>
      <p>Personnummer: {teacher.socialSecurityNumber}</p>
      <p>E-post: {teacher.email}</p>
      <p>Mobilnummer: {teacher.phoneNumber}</p>
      <p>Kompetensområden: {teacher.expertise}</p>
    </>
  )
}

export default Teacher;