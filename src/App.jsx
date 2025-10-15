import { Container } from "react-bootstrap";
import AppNavbar from "./components/layout/AppNavbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <AppNavbar />
      {/* The rest of your page content goes here */}
      <Container className="mt-4">
        <h1>Page Content</h1>
        <p>This page uses the self-contained Navbar component.</p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;