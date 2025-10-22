// A centralized list of all your event data.
// Using "YYYY-MM-DD" format for dates makes them easy to parse.
import IntroductoryEvent from "../assets/images/events/intro.webp";
import CloudStudyJam from "../assets/images/events/cloud.webp";
import Hacktoberfest from "../assets/images/events/hacktoberfest.webp";
import GeminiHackDay from "../assets/images/events/hackday.webp";
const allEvents = [
  {
    id: 1,
    image: IntroductoryEvent,
    title:
      "Know Your Leads: New Kickoff (Ground Zero) + Google Ambassador Program",
    description:
      "This event is your gateway to understand who to approach for guidance, whether you're a beginner or a seasoned coder. It will introduce you to the Mentors of each domain—people you can reach out to for guidance, project collaboration, or mentorship throughout the session.",
    date: "2025-09-18",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-government-college-of-engineering-and-ceramic-technology-kolkata-india-presents-know-your-leads-new-kickoff-ground-zero-google-ambassador-program/",
  },
  {
    id: 2,
    image: CloudStudyJam,
    title: "Cloud Kickoff: Pre-Study Jam Warm-Up",
    description:
      "Join us on **23rd September at 8:00 PM** for a virtual workshop on Google Cloud. We'll introduce the upcoming **Cloud Study Jam (Oct 1-31)**, share tips to set up your Google Cloud profile and earn skill badges, discuss strategies to complete labs effectively, and answer your questions live. Whether you're a beginner or already exploring the cloud, this session is the perfect warm-up before the official jam begins.",
    date: "2025-09-23",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-government-college-of-engineering-and-ceramic-technology-kolkata-india-presents-cloud-kickoff-pre-study-jam-warm-up/",
  },
  {
    id: 3,
    image: Hacktoberfest,
    title: "Hacktoberfest Kickstart 2025: Fork, Push & Repeat",
    description:
      "Hacktoberfest 2025 is here, and we're bringing the open-source spirit to GCECT! Join us for a session hosted by Google Developer Groups on Campus - GCECT, where we'll introduce Hacktoberfest 2025, explain how to participate, and guide you in making your first open-source contribution. We'll also review the progress of our Cloud Study Jam participants, highlight key milestones, share troubleshooting tips, and help beginners understand Git, GitHub, and open collaboration. Active contributors may even receive special recognition. Whether you're refining your open-source skills or exploring Google Cloud, this meetup is the perfect place to learn, share, and grow with the community.",
    date: "2025-10-18",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-government-college-of-engineering-and-ceramic-technology-kolkata-india-presents-hacktoberfest-kickstart-2025-fork-push-amp-repeat/",
  },
  {
    id: 4,
    image: GeminiHackDay,
    title: "Gemini HackDays 2025 GCECT",
    description: "A 5-hour celebration of innovation powered by **MLH and Google Gemini!** Join the brightest minds at GCECT to brainstorm, build prototypes, and showcase tech solutions. Whether you're creating web apps, data tools, or innovative designs, this hack day is your chance to learn, experiment, and collaborate with like-minded innovators in a fast-paced, friendly environment.",
    date: "2025-11-03",
    link: "https://forms.gle/SfAdwwijWiaJSebe8 ",
  },
];

/**
 * Sorts events by date, from most recent to oldest.
 * @param {Array} events - The array of event objects to sort.
 * @returns {Array} The sorted array of events.
 */
const sortByDate = (events) => {
  return events.sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Gets all upcoming events.
 * An event is considered "upcoming" if its date is today or in the future.
 * @returns {Array} A sorted array of upcoming event objects.
 */
export const getUpcomingEvents = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to the beginning of the day for accurate comparison

  const upcoming = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  });

  return sortByDate(upcoming).reverse(); // Show closest upcoming event first
};

/**
 * Gets all past events.
 * An event is considered "past" if its date is before today.
 * @returns {Array} A sorted array of past event objects.
 */
export const getPastEvents = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const past = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < today;
  });

  return sortByDate(past); // Show most recent past event first
};
