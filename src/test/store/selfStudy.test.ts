import selfStudyReducer, { setStudy } from '@store/selfStudy'

describe('selfStudy reducer test', () => {
  const selfStudy = {
    pos: '2층 홈베이스',
    excuse: '그냥',
    isChecked: null,
    date: new Date().toString()
  }

  it('should set selfStudy state', () => {
    expect(
      selfStudyReducer(
        {
          pos: '',
          excuse: '',
          isChecked: null
        },
        setStudy(selfStudy)
      )
    ).toEqual(selfStudy)
  })
})
