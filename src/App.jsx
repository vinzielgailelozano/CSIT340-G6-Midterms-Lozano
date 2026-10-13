import { useState } from "react";
import Navbar from "./components/Navbar";
import PlanPicker from "./components/PlanPicker";
import Footer from "./components/Footer";
 
function App() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);
 
  function handleAddSeat() {
    setSeats(seats + 1);
  }
 
  function handleAddMonth() {
    setMonths(months + 1);
  }
 
  function handleReset() {
    setSeats(1);
    setMonths(1);
  }
 
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />
      <PlanPicker
        seats={seats}
        months={months}
        onAddSeat={handleAddSeat}
        onAddMonth={handleAddMonth}
        onReset={handleReset}git
      />
      <Footer />
    </div>
  );
}
 
export default App;