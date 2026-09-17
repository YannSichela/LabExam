import { useState } from "react"
import RegistrationResult from "./RegistrationResult"

function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: "", enrollmentId: "", email: "", phone: "", course: "", semester: ""
  })
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required /><br/><br/>
        <input name="enrollmentId" placeholder="Enrollment ID" value={formData.enrollmentId} onChange={handleChange} required /><br/><br/>
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br/><br/>
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required /><br/><br/>
        <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} required /><br/><br/>
        <input name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} required /><br/><br/>
        <button type="submit">Register</button>
      </form>

      {submittedData && <RegistrationResult data={submittedData} />}
    </div>
  )
}

export default StudentForm






