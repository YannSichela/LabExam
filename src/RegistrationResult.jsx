function RegistrationResult({ data }) {
  return (
    <div style={{ marginTop: '20px', border: '1px solid green', padding: '10px', background: '#e6ffe6' }}>
      <h3 style={{ color: 'green' }}>Registration Successful</h3>
      <p><b>Full Name:</b> {data.fullName}</p>
      <p><b>Enrollment ID:</b> {data.enrollmentId}</p>
      <p><b>Email:</b> {data.email}</p>
      <p><b>Phone:</b> {data.phone}</p>
      <p><b>Course:</b> {data.course}</p>
      <p><b>Semester:</b> {data.semester}</p>
    </div>
  )
}

export default RegistrationResult