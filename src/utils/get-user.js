import axios from 'axios'


export async function getUser(user){
  let data= await axios.get(`https://api.github.com/users/${user}`)
  return data
}

export async function getAvatar(userId){
  const url = `https://avatars2.githubusercontent.com/u/${userId}`
  let avatar=await axios.get(url)
  return avatar;
}

export  async function getGists(loginId) {
     const url = `https://api.github.com/users/${loginId}/gists`;
     const gists = await axios.get(url);
     return gists;
   }
