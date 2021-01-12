import axios from 'axios'


export async function getUsers(user){
  let data={}
  await axios.get(`https://api.github.com/users/${user}`).then(resp => {
    data=resp;
  })
  return data
}

export async function getAvatar(userId){
  const url = `https://avatars2.githubusercontent.com/u/${userId}`
  let avatar='';
  await axios.get(url).then(res=>avatar=res)
  return avatar;
}




// to layout the images side by side

{/* <a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=convoychat" />
</a> */}





//  All inbuilt themes for stat-cards

// dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula