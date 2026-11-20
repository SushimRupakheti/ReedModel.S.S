import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './pages/Admissions.jsx'
import Facilities from './pages/Facilities.jsx'
import StudentLife from './pages/StudentLife.jsx'
import Notices from './pages/Notices.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="notices" element={<Notices />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
