import React from 'react';
import TeamCard from '../../components/common/TeamCard'; // Adjust path if needed
import { getMentors } from '../../data/teamData';

function Mentors() {
  const mentors = getMentors();

  return (
    <div className="my-5">
      <h2 className="text-center mb-5 fw-bold">Our Mentors</h2>
      {mentors.map(member => (
        <TeamCard
          key={member.id}
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
          github={member.github}
          linkedin={member.linkedin}
        />
      ))}
    </div>
  );
}

export default Mentors;