// import axios from "axios"
import React from "react"
import Loader from "react-loader-spinner";
import { Bar, Doughnut } from "react-chartjs-2";




export default function Charts({ userLanguages, SetLoading, SetError,isLoading,user }) {
  const [chartData, setChartData] = React.useState(userLanguages)

  const setchartInfo = React.useCallback(() => {
    setChartData(userLanguages);
  },[userLanguages])

  React.useEffect(() => {
    setchartInfo()
  }, [])

  const state = {
    labels: Object.keys(chartData),
    datasets: [
      {
        label: "bytes of Code",
        backgroundColor: [
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#4B5000",
          "#003350",
          "#35014F",
          "#175000",
        ],
        fill: false,
        borderColor: "rgba(0,0,0,.45)",
        borderWidth: 2,
        data: Object.values(chartData),
      },
    ],
  };

  return (
    <div>
      <div className="row mt-4 cover-area">
        <div className="col-sm-6">
          <div className="card light-bg">
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
          <div className="card light-bg">
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
      </div>
      {Object.keys(chartData).length > 1 ? (
        <div className="row mt-4 cover-area mb-5">
          <div className="col-sm-6">
            <div className="card light-bg py-4">
              <div className="card-body">
                <Bar data={state} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card light-bg py-4">
              <div className="card-body">
                <Doughnut
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Average usage of code per repo",
                      fontSize: 20,
                    },
                    fill: false,
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container d-flex justify-content-center mt-3">
          <Loader
            type="Rings"
            color="#007F7F"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}
    </div>
  );
}





