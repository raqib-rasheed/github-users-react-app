export default function ShowFollowers({ followers }) {
  return (
    <div className="card text-center mt-3">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <span className="nav-link active" aria-current="true">
              Followers
            </span>
          </li>
        </ul>
      </div>
      <div className="overflow-auto followers-container">
        {followers && followers.length > 1 ? (
          followers.map((follower) => {
            const follwerAccountLink = follower.followerGithubUrl
              .replace("api.", "")
              .replace("/users", "");
            return (
              <div id={follower.login} className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="user-info d-flex">
                    <div className="img-container">
                      <img
                        className="user-picture"
                        alt=""
                        src={follower.avatarUrl}
                      />
                    </div>
                    <div className="user-name d-flex-column mx-3">
                      <div className="d-flex-column">
                        <a
                          href={follwerAccountLink}
                          className="text-decoration-none"
                          target="blank"
                        >
                          <h5 className="text-start text-dark">
                            {follower.login}
                          </h5>
                          <h6 className="text-muted text-start hover-effect">
                            {follwerAccountLink}
                          </h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-muted">No followers to display</p>
        )}
      </div>
    </div>
  );
}
