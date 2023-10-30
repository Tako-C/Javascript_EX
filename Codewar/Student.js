const students = [
    {
      name: "Sophia",
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90],
    },
    {
      name: "Mason",
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62],
    },
    {
      name: "Isabella",
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78],
    },
    {
      name: "Liam",
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95],
    },
    {
      name: "Olivia",
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62],
    },
  ]

  function getAttendanceRate(student) {
    const atdRate = students.map((student)=> {
      const currentValue = student.attendance.filter((atd)=> atd === true).length
      const result_atdRate = (currentValue / student.attendance.length) *100
      
      if (result_atdRate < 80) {
        return `${student.name +": "+ result_atdRate}`
      }else{
        
      } 

    })
    return atdRate
    
  }

  function Average(student) {

    const avg = students.map((student)=>{
      currentScore = student.testScores.reduce((totalAmount , Score)=> totalAmount + Score ,0)
      return resultSccorre = currentScore / student.testScores.length
    })
    return avg 
  }

  // function identify(student) {
  //   const studentInfo = [];
  
  //   for (const s of student) {
  //     const attendanceRate = getAttendanceRate(s);
  //     const average = Average(s);
  
  //     let summary = `Name: "${s.name}", Attendance: ${getAttendanceRate.name}%, Average: ${Average.name}`;
  //     studentInfo.push(summary);
  //   }
  
  //   return studentInfo;
  // }
  


  console.log(getAttendanceRate(students))
  console.log("------------------------------------------------------------------------------------------")
  console.log(Average(students))
  console.log("------------------------------------------------------------------------------------------")
  // console.log(identify(students))
  console.log("------------------------------------------------------------------------------------------")