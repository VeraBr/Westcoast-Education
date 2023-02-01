import React, { useState } from "react";

const AuthContext = React.createContext({
  courseList: [],
  teacherList: [],
  getCourses: () => {},
  getTeachers: () => {},

  course: {},
  setCourse: {},
  AddCourse: () => {},

  teacher: {},
  setTeacher: {},
  AddTeacher: () => {},

  CloseModal: () => {},
});

export const AuthContextProvider = (props) => {
  const [teacherList, setTeacherList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = useState({});
  const [teacher, setTeacher] = useState({});

  const [showModal, setShowModal] = useState(false);


  const CloseModal = () => {
    setShowModal(false);
  };

  const getCourses = () => {
    fetch("http://localhost:3010/courses")
    .then((response) => response.json())
    .then((data) => setCourseList(data));
  };


  const AddCourse = (course) => {
    fetch("http://localhost:3010/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course)
    });
  }

  const getTeachers = () => {
    fetch("http://localhost:3010/teachers")
    .then((response) => response.json())
    .then((data) => setTeacherList(data));
  };

  const AddTeacher = (teacher) => {
    fetch("http://localhost:3010/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher)
    });
  }

  return (
    <AuthContext.Provider 
      value={{
        courseList,
        setCourseList,
        teacherList,
        setTeacherList,
        getCourses,
        course,
        setCourse,
        getTeachers,
        teacher,
        setTeacher,
        showModal,
        setShowModal,
        AddCourse,
        AddTeacher,
        CloseModal,
      }}>
        {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
