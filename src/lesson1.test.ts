import { School, Direction, Level, Group, Student } from './main'

describe('School', () => {
  it('should create a new school and add a direction', () => {
    const school = new School()
    expect(school.directions.length).toBe(0)

    const direction = new Direction('Science')
    school.addDirection(direction)
    expect(school.directions.length).toBe(1)
    expect(school.directions[0].name).toBe('Science')
  })

  it('should add multiple directions to the school', () => {
    const school = new School()

    const direction1 = new Direction('Science')
    const direction2 = new Direction('Arts')

    school.addDirection(direction1)
    school.addDirection(direction2)

    expect(school.directions.length).toBe(2)
    expect(school.directions[0].name).toBe('Science')
    expect(school.directions[1].name).toBe('Arts')
  })
})

describe('Direction', () => {
  it('should create a new direction and add a level', () => {
    const direction = new Direction('Science')
    expect(direction.levels.length).toBe(0)

    const level = new Level('High School', 'Science Program')
    direction.addLevel(level)
    expect(direction.levels.length).toBe(1)
    expect(direction.levels[0].name).toBe('High School')
  })

  it('should add multiple levels to the direction', () => {
    const direction = new Direction('Science')

    const level1 = new Level('High School', 'Science Program')
    const level2 = new Level('Middle School', 'Science Program')

    direction.addLevel(level1)
    direction.addLevel(level2)

    expect(direction.levels.length).toBe(2)
    expect(direction.levels[0].name).toBe('High School')
    expect(direction.levels[1].name).toBe('Middle School')
  })
})

describe('Group', () => {
  it('should create a new group and add students', () => {
    const group = new Group('Science', 'High School')
    expect(group.students.length).toBe(0)

    const student1 = new Student('John', 'Doe', 2005)
    const student2 = new Student('Jane', 'Smith', 2004)

    group.addStudent(student1)
    group.addStudent(student2)

    expect(group.students.length).toBe(2)
    expect(group.students[0].fullName).toBe('Doe John')
    expect(group.students[1].fullName).toBe('Smith Jane')
  })

  it('should sort students by performance', () => {
    const group = new Group('Science', 'High School')

    const student1 = new Student('John', 'Doe', 2005)
    const student2 = new Student('Jane', 'Smith', 2004)

    student1.setGrade('Math', 90)
    student1.setGrade('Science', 85)
    student2.setGrade('Math', 95)
    student2.setGrade('Science', 92)

    student1.markAttendance(true)
    student1.markAttendance(true)
    student1.markAttendance(false)
    student2.markAttendance(true)
    student2.markAttendance(true)
    student2.markAttendance(true)

    group.addStudent(student1)
    group.addStudent(student2)

    const sortedStudents = group.showPerformance()
    expect(sortedStudents[0].fullName).toBe('Smith Jane')
    expect(sortedStudents[1].fullName).toBe('Doe John')
  })
})

describe('Student', () => {
  it('should set grades and mark attendance for a student', () => {
    const student = new Student('John', 'Doe', 2005)

    student.setGrade('Math', 90)
    student.setGrade('Science', 85)
    expect(student.grades['Math']).toBe(90)
    expect(student.grades['Science']).toBe(85)

    student.markAttendance(true)
    student.markAttendance(true)
    student.markAttendance(false)
    expect(student.attendance.length).toBe(3)
    expect(student.attendance[0]).toBe(true)
    expect(student.attendance[2]).toBe(false)
  })

  it('should calculate the performance rating for a student', () => {
    const student = new Student('John', 'Doe', 2005)
    student.setGrade('Math', 90)
    student.setGrade('Science', 85)

    student.markAttendance(true)
    student.markAttendance(true)
    student.markAttendance(false)

    // Assuming the calculation logic is correct, you can test the expected output here
    expect(student.getPerformanceRating()).toBeCloseTo(77.08)
  })
})
