import React from 'react';
import TeamCard from '../../components/common/TeamCard'; // Adjust path if needed
import { getOrganizers } from '../../data/teamData';

function Organizers() {
  const organizers = getOrganizers();

  return (
    <div className="my-5">
      <h2 className="text-center mb-5 fw-bold">Our Organizers</h2>
      {organizers.map(member => (
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

export default Organizers;