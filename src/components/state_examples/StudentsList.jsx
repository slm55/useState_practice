import React, { useEffect, useState } from "react";

// 5 == 5 true
// "hello" == "hello" true
// [1, 2, 3] == [1, 2, 3] false

function StudentsList() {
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students")) || []);
  const [student, setStudent] = useState("");
  const [search, setSearch] = useState("");

  function handleStudentChange(e) {
    setStudent(e.target.value);
  }

  function handleClick() {
    if (student != "") {
      setStudents([...students, { id: students.length + 1, name: student }]);
      setStudent("");
    }
  }

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div>
      <input
        value={student}
        type="text"
        placeholder="Add a new student"
        onChange={handleStudentChange}
      />
      <button onClick={handleClick}>Add</button>
      <br />
      <input
        value={search}
        type="search"
        placeholder="Search student..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3>Students List</h3>
      {search == "" && (
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      )}
      {search != "" && (
        <ul>
          {students
            .filter((student) => student.name.startsWith(search))
            .map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default StudentsList;
