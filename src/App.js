import HeaderBg from "./components/HeaderBg";
import JobOffers from "./components/JobOffers";
import FilterProvider from "./context/FilterProvider";

function App() {
  return (
      <FilterProvider>
        <HeaderBg/>
        <JobOffers/>
      </FilterProvider>
  );
}

export default App;
