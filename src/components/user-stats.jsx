import { FaPencilAlt } from 'react-icons/fa'
import { ImUserPlus,ImUsers } from 'react-icons/im'
import { BsCode } from 'react-icons/bs'



export default function UserStats(){
  return(
    <div className="user-stats-container d-flex justify-content-center mt-5">
      <div className="row user-stats">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
            <FaPencilAlt />
              <h5 className="card-title">no of repos</h5>
              <h6>Repos</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
            <ImUserPlus />
              <h5 className="card-title">no of repos</h5>
              <h6>Repos</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-3 ">
          <div className="card">
            <div className="card-body">
            <ImUsers />
              <h5 className="card-title">no of repos</h5>
              <h6>Repos</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-3 ">
          <div className="card">
            <div className="card-body">
              <BsCode />
              <h5 className="card-title">no of repos</h5>
              <h6>Repos</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}