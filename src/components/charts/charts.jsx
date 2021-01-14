// import axios from "axios"
import React from "react"
import Chart from "react-apexcharts";
import sortedRepo from "./charts-index";

export default function Charts({ user }) {
  const [data, setData] = React.useState({})

  
  const getPercentage = React.useCallback(async() => {
    const result = await sortedRepo(user.repos_url)
      setData(result)
  },[ user.repos_url])
    
  React.useEffect(() => {
    getPercentage()
  },[ getPercentage, user.repos_url])
  



    return (
    <>
      {/* <div className="row mt-4 cover-area">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <a href={`https://github.com/${user.login}`}>
                <img
                  alt=""
                  align="center"
                  src={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=onedark`}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <a href={`https://github.com/${user.login}`}>
                <img
                  alt=""
                  align="center"
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user.login}`}
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
       {/* <div className="donut">
        <Chart
          options={axes.options}
          series={axes.series}
          type="donut"
          width="380"
        />
      </div>  */}
      
    </>
  );
}





