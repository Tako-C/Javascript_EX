const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
  function getAttendanceRate(students) {
    const sumCounter = students.map((student)=>{
      const currentValues = student.attendance.filter((atd)=> atd == true).length
      const result = (currentValues / student.attendance.length)*100
      if (result < 80) {
        return student.name
      }else{
        return result
      } 
    })
    return sumCounter
  }

  console.log(getAttendanceRate(students))