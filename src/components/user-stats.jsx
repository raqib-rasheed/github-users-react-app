import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { ImUserPlus, ImUsers } from "react-icons/im";
import { BsCode } from "react-icons/bs";
import StatsTemplate from "./elements/userstatsTemplate";

export default function UserStats({ user, gists }) {
  return (
    <>
      <div className="user-stats-container mt-3 d-flex justify-content-center">
        <div className="row user-stats">
          <StatsTemplate label="Repos" stat={user.public_repos}>
            <FaPencilAlt className="my-1" />
          </StatsTemplate>
          <StatsTemplate label="Followers" stat={user.followers}>
            <ImUsers className="my-1" />
          </StatsTemplate>
          <StatsTemplate label="Following" stat={user.following}>
            <ImUserPlus className="my-1" />
          </StatsTemplate>
          <StatsTemplate label="Gists" stat={gists}>
            <BsCode className="my-1 " />
          </StatsTemplate>
        </div>
      </div>
    </>
  );
}
