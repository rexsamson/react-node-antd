export const headers = {
  headers: {
    'x-api-language': 'en',
    'content-type': 'application/json',
    uid: localStorage.getItem('profileId') ? localStorage.getItem('profileId') : '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  }
}
