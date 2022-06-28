import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHome from './component/adminHome/adminHome'
import ViewAdmin from './component/adminHome/viewAdmin'
import EditAdmin from './component/adminHome/editAdmin'
import AddAdmin from './component/adminHome/addAdmin'
import DisplayAllAdmin from './component/adminHome/displayAllAdmin'
import DisplayAllStudent from './component/student/studentlist'
import ViewStudent from './component/student/viewStudent'
import EditStudent from './component/student/editStudent'
import AddStudent from './component/student/addStudent'
import Home from './component/home/homepage'
import StudentSignup from './component/signup/signup'
import ViewPost from './component/post/viewPost'
import EditPost from './component/post/editPost'
import StudentDisplayPost from './component/studentHome/displayPosts'
import AddPost from './component/post/addPost'
import ListAllTeachers from './component/teachers/listAllTeachers'
import AddTeacher from './component/teachers/addteacher'
import ViewTeacher from './component/teachers/viewTeacher'
import EditTeacher from './component/teachers/editTeacher'
import ListAllSubject from './component/subject/listAllSubject'
import AddSubject from './component/subject/addSubject'
import ViewSubject from './component/subject/viewSubject'
import EditSubject from './component/subject/editSubject'

export default function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='admin' element={<AdminHome />} />
        <Route path='viewuser/:id' element={<ViewAdmin />} />   
        <Route path='edituser/:id' element={<EditAdmin />} />     
        <Route path="addadmin" element={<AddAdmin/>} />
        <Route path="adminlist" element= {<DisplayAllAdmin />}/>
        <Route path='studentlist' element= {<DisplayAllStudent />} />
        <Route path='viewstudent/:id' element ={<ViewStudent />} />
        <Route path='editstudent/:id' element={<EditStudent />} />
        <Route path='addstudent' element={<AddStudent />} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<StudentSignup />} />
        <Route path='viewpost/:id' element={<ViewPost/>}/>
        <Route path='editpost/:id' element={<EditPost/>}/>
        <Route path='/student' element={<StudentDisplayPost/>}/>
        <Route path="/addpost" element={<AddPost/>}/>
        <Route path='/teacherlist' element={<ListAllTeachers/>}/>
        <Route path='/addteacher' element={<AddTeacher/>}/>
        <Route path='/viewTeacher/:id' element={<ViewTeacher/>}/>
        <Route path='/editTeacher/:id' element={<EditTeacher/>}/>
        <Route path='/subjectlist' element={<ListAllSubject/>}/>
        <Route path='addsubject' element={<AddSubject/>}/>
        <Route path='/viewsubject/:id' element={<ViewSubject/>}/>
        <Route path='/editsubject/:id' element={<EditSubject/>}/>
    </Routes>
    </BrowserRouter>
  )
}
