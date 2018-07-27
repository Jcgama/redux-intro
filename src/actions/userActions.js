
export const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'Der'
  }
}

export const typedName = (val) => {
  return {
    type: 'typedName',
    payload: {
      user: val
    }
  }
}