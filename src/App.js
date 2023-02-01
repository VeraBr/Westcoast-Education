import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Navbar from './components/layout/Navbar';
import CourseList from './components/courses/CourseList';
import Course from './components/courses/Course';
import GlobalStyles from './globalStyles';
import TeacherList from './components/teachers/TeacherList';
import Teacher from './components/teachers/Teacher';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="/teachers" element={<TeacherList />}/>
          <Route path="/teachers/:id" element={<Teacher />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
