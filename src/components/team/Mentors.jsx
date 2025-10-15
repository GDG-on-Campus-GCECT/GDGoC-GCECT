import React from "react";
import { Row, Col } from "react-bootstrap";
import TeamCard from "../../components/common/TeamCard"; 
import { getMentors } from "../../data/teamData";

function Mentors() {
  const mentors = getMentors();

  return (
    <div className="my-5">
      <h2 className="text-center mb-5 fw-bold">Our Mentors</h2>
      <Row className="justify-content-center">
        {mentors.map((member, index) => {
          const isLastAndOdd =
            index === mentors.length - 1 && mentors.length % 2 !== 0;
          return (
            <Col
              key={member.id}
              lg={isLastAndOdd ? 6 : 6}
              className={`mb-4 ${
                isLastAndOdd ? "d-flex justify-content-center" : ""
              }`}
            >
              <div className={isLastAndOdd ? "w-100" : ""}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                  github={member.github}
                  linkedin={member.linkedin}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Mentors;
