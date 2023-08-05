import logo from "./logo.svg";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listSignalsQuery } from "./graphql/queries";
import CollapsibleTable from "./Components/tables/CollapsibleTable";
import Loader from "./Components/loader";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await API.graphql(graphqlOperation(listSignalsQuery));
      if (data !== undefined) {
        setData(data.listSIGNALS.items);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching signals:", error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {loading ? <Loader /> : <CollapsibleTable tableData={data} />}
    </div>
  );
}

export default App;
