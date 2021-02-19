/** @format */

import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const apiTours = await response.json();
      setLoading(false);
      setTours(apiTours);
    } catch (apiDataFetchError) {
      setLoading(false);
      console.log(apiDataFetchError);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  return (
    <main>
      <Tours removeTour={removeTour} tours={tours}></Tours>
    </main>
  );
}

export default App;
