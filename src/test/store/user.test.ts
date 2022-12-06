import userReducer, { setUser, clearUser } from '@store/user'

describe('user reducer test', () => {
  const user = {
    sub: '123456789',
    email: 's21060@gsm.hs.kr',
    picture: 'https://sdfjsfklsdjfk',
    name: 'hello',
    role: 'student',
    grade: 2,
    class: 1,
    num: 9
  } as const

  it('should set user data', () => {
    expect(userReducer({ name: '' }, setUser(user))).toEqual(user)
  })

  it('should clear data', () => {
    expect(userReducer(user, clearUser())).toEqual({ name: '' })
  })
})
