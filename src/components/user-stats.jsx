import React from 'react';
import { FaPencilAlt } from 'react-icons/fa'
import { ImUserPlus,ImUsers } from 'react-icons/im'
import { BsCode } from 'react-icons/bs'


export default function UserStats({ user, gists }) {

  return (
    <>
      <div className="user-stats-container d-flex justify-content-center cover-area ">
        <div className="row user-stats">
          <div className="col-sm-3">
            <div className="card light-bg">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <FaPencilAlt className="my-1" />
                  <div className="d-flex-column mx-2">
                    <h5 className="text-primary">{user.public_repos}</h5>
                    <h6>Repos</h6> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card light-bg">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <ImUsers className="my-1" />
                  <div className="d-flex-column mx-2">
                    <h5 className="text-primary">{user.followers}</h5>
                    <h6>Followers</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card light-bg">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <ImUserPlus className="my-1" />
                  <div className="d-flex-column mx-2">
                    <h5 className="text-primary">{user.following}</h5>
                    <h6>Following</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card light-bg">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <BsCode className="my-1 " />
                  <div className="d-flex-column mx-2">
                    <h5 className="text-primary">{gists}</h5>
                    <h6>Gists</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}