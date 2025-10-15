import React from "react";
import { Row, Col } from "react-bootstrap";
import TeamCard from "../../components/common/TeamCard"; // Adjust path if needed
import { getOrganizers } from "../../data/teamData";

function Organizers() {
  const organizers = getOrganizers();

  return (
    <div className="my-5">
      <h2 className="text-center mb-5 fw-bold">Our Organizers</h2>
      <Row className="justify-content-center">
        {organizers.map((member, index) => {
          const isLastAndOdd =
            index === organizers.length - 1 && organizers.length % 2 !== 0;
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

export default Organizers;
