import axios from "axios"
import React from "react"
import {getUsers} from "../utils/get-user"

export default function Charts({ setUser,user }){
  const [langImg,setLangImg] = React.useState("")

  const getUserfunc= React.useCallback(async () =>{
    await getUsers("john-smilga").then(res=>setUser(res.data))
  },[setUser])
  
  React.useEffect(()=>{
    getUserfunc()
    getUserLanguages('john-smilga')
  },[getUserfunc])

  async function getUserLanguages(userName){
    const url = `https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}`
    await axios.get(url).then(res=>setLangImg(res))
  }

  return (
<>
<div className="row mb-2">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <a href="https://github.com/john-smilga">
        <img alt="" align="center" src="https://github-readme-stats.vercel.app/api?username=john-smilga&show_icons=true&theme=radical" />
      </a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <a href="https://github.com/john-smilga">
        <img alt="" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=john-smilga" />
      </a> 
      </div>
    </div>
  </div>
</div>
</>
  )
}