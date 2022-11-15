const checkStudent = (email: string): 'student' | 'teacher' => {
  return /s\d{5}@gsm.hs.kr/g.test(email) ? 'student' : 'teacher'
}

export default checkStudent
