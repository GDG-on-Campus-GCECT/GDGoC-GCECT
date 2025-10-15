// Import all the team member images
import anish from '../assets/images/team/anish.webp';
import arkapravo from '../assets/images/team/arkapravo.webp';
import bidwattar from '../assets/images/team/bidwattar.webp';
import bishal from '../assets/images/team/bishal.webp';
import farhan from '../assets/images/team/farhan.webp';
import riyanka from '../assets/images/team/riyanka.webp';
import rudrajyoty from '../assets/images/team/rudrajyoty.webp';
import samman from '../assets/images/team/samman.webp';
import sayan from '../assets/images/team/sayan.webp';
import shubho from '../assets/images/team/shubho.webp';
import sneha from '../assets/images/team/sneha.webp';
import soujatya from '../assets/images/team/soujatya.webp';
import sourin from '../assets/images/team/sourin.webp';
import subhrajyoti from '../assets/images/team/subhrajyoti.webp';
import sutanu from '../assets/images/team/sutanu.webp';


// A centralized list of all team members.
const allTeamMembers = [
  // --- ORGANIZERS ---
  {
    id: 1,
    name: 'Arkapravo Roy',
    role: 'GDGoC Organizer',
    description: 'Leading the Google Developer Group on Campus with a passion for community and technology.',
    image: arkapravo,
    github: 'https://github.com/SilentAssasin10',
    linkedin: 'https://www.linkedin.com/in/arkapravo-roy-7067442b6/',
    type: 'organizer',
  },
  {
    id: 2,
    name: 'Sourin Kar',
    role: 'Deputy Organizer',
    description: 'Supporting the chapter\'s initiatives and helping to drive our community forward.',
    image: sourin,
    github: 'https://github.com/Sourin3081',
    linkedin: 'https://www.linkedin.com/in/sourin-kar-15396a305/',
    type: 'organizer',
  },
  {
    id: 3,
    name: 'Sayan Biswas',
    role: 'Technical Head',
    description: 'Guiding the technical direction of the group and mentoring members on their development journey.',
    image: sayan,
    github: 'https://github.com/Sbiswas001',
    linkedin: 'https://www.linkedin.com/in/sbiswas001',
    type: 'organizer',
  },
  {
    id: 4,
    name: 'Bidwattar Kar',
    role: 'Events Head',
    description: 'Organizing engaging and informative events that bring our community together to learn and grow.',
    image: bidwattar,
    github: 'https://github.com/Bidwattar98',
    linkedin: 'https://www.linkedin.com/in/bidwattar-kar-963399289/',
    type: 'organizer',
  },
  {
    id: 5,
    name: 'Riyanka Nandi',
    role: 'Outreach Head',
    description: 'Connecting with students and partners to expand our community\'s reach and impact.',
    image: riyanka,
    github: 'https://github.com/riyankanandi',
    linkedin: 'https://www.linkedin.com/in/riyanka-nandi-b16b64293/',
    type: 'organizer',
  },
  {
    id: 6,
    name: 'Sneha Mandal',
    role: 'Outreach and Media Handler',
    description: 'Crafting our message and managing our social presence to keep the community informed and engaged.',
    image: sneha,
    github: 'https://github.com/snehamandal0001',
    linkedin: 'https://www.linkedin.com/in/sneha-mandal-a7581228b/',
    type: 'organizer',
  },
  {
    id: 7,
    name: 'Samman Das',
    role: 'PR and Outreach',
    description: 'Building relationships and managing public relations to foster a positive and inclusive community environment.',
    image: samman,
    github: 'https://github.com/RayBreeze',
    linkedin: 'https://www.linkedin.com/in/samman-das-02aaa425b/',
    type: 'organizer',
  },
  // --- MENTORS ---
  {
    id: 8,
    name: 'Rudrajyoty Mahata',
    role: 'Web Mentor',
    description: 'Mentoring students in modern web development technologies and best practices.',
    image: rudrajyoty,
    github: 'https://github.com/Rudra2004mahata',
    linkedin: 'https://www.linkedin.com/in/rudrajyoty-mahata-481824299/',
    type: 'mentor',
  },
  {
    id: 9,
    name: 'Shubhodeep Mondal',
    role: 'Web3 Mentor',
    description: 'Guiding members through the exciting and evolving world of Web3 and blockchain technologies.',
    image: shubho,
    github: 'https://github.com/Spidy394',
    linkedin: 'https://www.linkedin.com/in/shubho-deep/',
    type: 'mentor',
  },
  {
    id: 10,
    name: 'Bishal Begani',
    role: 'UI/UX Mentor',
    description: 'Helping students create beautiful, intuitive, and user-friendly designs for their projects.',
    image: bishal,
    github: 'https://github.com/NormseCoder',
    linkedin: 'https://www.linkedin.com/in/bishal-begani-0a333a1ba/',
    type: 'mentor',
  },
  {
    id: 11,
    name: 'Sutanu Saha',
    role: 'App Mentor',
    description: 'Providing guidance and support for students building mobile applications for Android and iOS.',
    image: sutanu,
    github: 'https://github.com/sutanusaha1920',
    linkedin: 'https://www.linkedin.com/in/sutanu-saha-b89b87292/',
    type: 'mentor',
  },
  {
    id: 12,
    name: 'Soujatya Chowdhury',
    role: 'AI/ML Mentor',
    description: 'Mentoring in the fields of Artificial Intelligence and Machine Learning, from theory to application.',
    image: soujatya,
    github: 'https://github.com/hajubaju',
    linkedin: 'https://www.linkedin.com/in/soujatya-chowdhury-94124b288/',
    type: 'mentor',
  },
  {
    id: 13,
    name: 'Subhrajyoti Sen',
    role: 'CP Mentor',
    description: 'Training members in competitive programming, algorithms, and data structures.',
    image: subhrajyoti,
    github: 'https://github.com/Kolejking',
    linkedin: 'https://www.linkedin.com/in/subhrajyoti-sen-136009281/',
    type: 'mentor',
  },
  {
    id: 14,
    name: 'Farhan Uddin Ahamed',
    role: 'Cybersecurity Mentor',
    description: 'Sharing knowledge and best practices in cybersecurity to help students build secure applications.',
    image: farhan,
    github: '',
    linkedin: 'https://www.linkedin.com/in/farhan-ahamed-580b032b9/',
    type: 'mentor',
  },
  {
    id: 15,
    name: 'Anish Nath',
    role: 'Cloud Mentor',
    description: 'Helping members leverage the power of cloud computing and services like Google Cloud Platform.',
    image: anish,
    github: 'https://github.com/AutonomousAnish',
    linkedin: 'https://www.linkedin.com/in/anish-nath-60a792271/',
    type: 'mentor',
  },
];

/**
 * Gets all members who are organizers.
 * @returns {Array} An array of organizer objects.
 */
export const getOrganizers = () => {
  return allTeamMembers.filter(member => member.type === 'organizer');
};

/**
 * Gets all members who are mentors.
 * @returns {Array} An array of mentor objects.
 */
export const getMentors = () => {
  return allTeamMembers.filter(member => member.type === 'mentor');
};
