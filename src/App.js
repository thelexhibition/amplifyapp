import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import CollapsibleTable from "./Components/tables/CollapsibleTable";
import Loader from "./Components/loader";
import { listSignals } from "./graphql/queries";
import { updateSignals } from "./graphql/mutations";

import NoDataFound from "./Components/noDataFound/NoDataFound";

function App() {
  const [signalData, setSignalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState(false);

  useEffect(() => {
    const fetchAllSignalData = async () => {
      setLoading(true);
      try {
        const response = await API.graphql(graphqlOperation(listSignals));
        const signalItems = response.data.listSignals.items;
        setSignalData(signalItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchAllSignalData();
  }, []);

  const updateFields = async (rowData) => {
    const updated = signalData?.map((ele) => {
      if (ele.id === rowData.id) {
        return { ...ele, workflow: !!ele.workflow ? false : true };
      }
      return ele;
    });

    const obj = updated.find((ele) => ele.id === rowData.id);

    const input = {
      id: obj.id,
      workflow: obj?.workflow,
      _version: obj?._version,
    };
    if (updated) {
      API.graphql(graphqlOperation(updateSignals, { input }))
        .then(({ data }) => {
          console.log("Signal updated:", { data });
          setSignalData(updated);

          // Handle success, update state, or perform other actions as needed
        })
        .catch((error) => {
          console.error("Error updating signal:", { error });
          // Handle error
        });
    }
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <CollapsibleTable tableData={signalData} updateFields={updateFields} />
      )}
    </div>
  );
}

export default App;
