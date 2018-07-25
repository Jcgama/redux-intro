import * as actions from '../userActions'

describe('actions', () => {
  it('should update user', () => {
    const expectedAction = {
      type: 'updateUser',
      payload: {
        user: 'John'
      }
    }
    expect(actions.updateUserAction).toEqual(expectedAction)
  })
})
