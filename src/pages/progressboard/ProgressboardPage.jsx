import React, { useState, useMemo } from "react";
import { Container, Button } from "react-bootstrap";
import { getSortedParticipants } from "../../data/progressboardData";
import ProgressboardHeader from "../../components/progressboard/ProgressboardHeader";
import StatsCards from "../../components/progressboard/StatsCard";
import SearchBar from "../../components/progressboard/SeachBar";
import RankingsList from "../../components/progressboard/RankingsList";
import ParticipantDetailsModal from "../../components/progressboard/ParticipantDetailsModal";
import "./Progressboard.css";

const ITEMS_PER_PAGE = 10;

function ProgressboardPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  // Memoize the sorted list so it's only calculated once
  const sortedParticipants = useMemo(() => getSortedParticipants(), []);

  // Filter participants based on the search term
  const filteredParticipants = useMemo(() => {
    return sortedParticipants.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, sortedParticipants]);

  const participantsToShow = filteredParticipants.slice(0, visibleCount);
  const totalParticipants = sortedParticipants.length;
  const highestScore =
    sortedParticipants.length > 0 ? sortedParticipants[0].score : 0;

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  return (
    <div className="progressboard-page">
      <Container className="py-5">
        <ProgressboardHeader participants={sortedParticipants} />
        <StatsCards total={totalParticipants} highest={highestScore} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RankingsList
          participants={participantsToShow}
          onShowDetails={setSelectedParticipant}
        />

        {/* Load More Section */}
        {visibleCount < filteredParticipants.length && (
          <div className="text-center mt-4">
            <Button
              variant="primary"
              className="btn-load-more"
              onClick={loadMore}
            >
              Load Next{" "}
              {Math.min(
                ITEMS_PER_PAGE,
                filteredParticipants.length - visibleCount
              )}{" "}
              Participants
            </Button>
            <p className="text-muted small mt-2">
              Showing {visibleCount} of {filteredParticipants.length}{" "}
              participants
            </p>
          </div>
        )}
      </Container>

      {/* The Modal for showing participant details */}
      <ParticipantDetailsModal
        participant={selectedParticipant}
        onHide={() => setSelectedParticipant(null)}
      />
    </div>
  );
}

export default ProgressboardPage;
