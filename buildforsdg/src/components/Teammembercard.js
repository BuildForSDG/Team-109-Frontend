import React from "react";
import PropTypes from "prop-types";
import {memberDetails  } from "../utils/TeamData";

const TeamCard = () => {

  return (
    <div className="container mt4 mb3">
      <h1 className="text-center meet-members mb3 ">
        Meet <span className=" border-bottom">The Facilit</span>ators
      </h1>
      <div className=" row no-gutters members">
        {memberDetails.map((member) => {
          return (
            <div
              className="col-xs-12 col-sm-3 col-md-3 no-gutters"
              key={member.id}
            >
              {/* <TeamCard member={member} /> */}
              <div className="card ma3 border-lime">
                <img
                  src={process.env.PUBLIC_URL + '/images/profile.jpg'}
                  height="150"
                  width="150"
                  className="card-img-top"
                  alt={member.name}
                />

                <div className="tc">
                  <div className="card-title">
                    <span>{member.name}</span> <br />
                    <small>{member.track}</small>
                  </div>
                  <p className="card-text bio">{member.bio}</p>
                  <p className="text-center">
                    {member.twitter && (
                      <a
                        href={`https://twitter.com/${member.twitter}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa fa-twitter follow-icon"
                          title={`Follow ${member.name} on twitter`}
                        ></i>
                      </a>
                    )}{" "}
                    &nbsp; &nbsp;
                    {member.instagram && (
                      <a
                        href={`https://instagram.com/${member.instagram}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          className="fa fa-instagram follow-icon"
                          title={`Follow ${member.name} on instagram`}
                        ></i>
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

memberDetails.propTypes = {
  member: PropTypes.object,
};

export default TeamCard;
