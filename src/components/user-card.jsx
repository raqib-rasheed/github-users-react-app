import React from 'react';
export default function UserCard({ user }){

  return (
          <div className="card text-center mt-3 cover-area">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <span className="nav-link active" aria-current="true">User</span>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="user-info d-flex">
                  <div className="img-container">
                    <img className="user-picture" alt="" src={`https://avatars2.githubusercontent.com/u/${user.id}`} />
                  </div>
            <div className="user-name d-flex-column mx-3">
              <div className="d-flex-column">
                    <h5 >{user.name}</h5>
                    <h6 className="text-muted text-start">{ user.login }</h6>

              </div>
                  </div>
                </div>
                <div className="follow-bttn">
                  <button className="btn btn-outline-success px-1">Follow</button>
                </div>
              </div>
              <div className="bio d-flex mt-2">
                <p>{ user.bio }</p>
              </div>
              <div className='other-details d-flex-column mt-2'>
                <div className="d-flex">
                  <i className="fa fa-envelope mx-2"></i><h6 className="text-muted">{": "+ user.email}</h6>
                </div>
                <div className="d-flex">
                  <i className="fa fa-map mx-2"></i><h6 className="text-muted">{": "+user.location}</h6>
                </div>
                </div>
              </div>
            </div>
  )
}