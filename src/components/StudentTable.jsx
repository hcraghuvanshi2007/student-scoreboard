import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, deleteStudent }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <StudentRow
            key={s.id}
            student={s}
            updateScore={updateScore}
            deleteStudent={deleteStudent}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;