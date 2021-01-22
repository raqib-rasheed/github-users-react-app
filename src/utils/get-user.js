import axios from 'axios'


export async function getUser(user){
  let { data } = await axios.get(`https://api.github.com/users/${user}`, {
    headers: {
      Authorization: "a0eea53be7eec122c8ce4a33108a8b9e5da6acd1",
    },
  });

  return data
}


export  async function getGists(loginId) {
     const url = `https://api.github.com/users/${loginId}/gists`;
     const gists = await axios.get(url, {
       headers: {
         Authorization: "a0eea53be7eec122c8ce4a33108a8b9e5da6acd1",
       },
     });
     return gists;
   }





   export async function sortedRepoLanguages(url) {
     let bytesofLanguages = {};
     let total = 0;
     if (url) {
       const result = await axios.get(url, {
         headers: {
           Authorization: "a0eea53be7eec122c8ce4a33108a8b9e5da6acd1",
         },
       });
       const data = result.data && result.data.slice(0,5);
       data.reduce(async (acc, crr) => {
         const langUrl = crr.languages_url;
         const { data: langObj } = await axios.get(langUrl, {
           headers: {
             Authorization: "a0eea53be7eec122c8ce4a33108a8b9e5da6acd1",
           },
         });
         for (let el in langObj) {
           total += langObj[el];
           bytesofLanguages[el]
             ? (bytesofLanguages[el] += langObj[el])
             : (bytesofLanguages[el] = langObj[el]);
           
         }
        });
        if (Object.keys(bytesofLanguages).length > 0) {
          total /= 100;
          for (let el in bytesofLanguages) {
            bytesofLanguages[el] /= total;
          }
        }
       return bytesofLanguages;
     }
}
   
export async function getFollowersList(url) {
  if (url) {
    const data = await axios.get(url, {
      headers: {
        Authorization: "a0eea53be7eec122c8ce4a33108a8b9e5da6acd1",
      },
    });
    const infos = data.data && data.data;
    const followersInfo =
      infos &&
      infos.slice(0, 20).reduce((acc, crr) => {
        const login = crr.login;
        const avatarUrl = crr.avatar_url;
        const followerGithubUrl = crr.url;
        acc.push({ login, avatarUrl, followerGithubUrl });
        return acc;
      }, []);
    return followersInfo;
  } else {
    return;
  }
}