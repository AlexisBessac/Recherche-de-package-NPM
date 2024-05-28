import { useEffect, useState } from "react";


function App() {
  const [searchText, setSearchText] = useState("react");
  const [data, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.npms.io/v2/package/${searchText}`);
      const dataRes = await res.json();
      setData(dataRes);
    }
    fetchData();
  }, [searchText]);


  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        <li><strong>Description:</strong> {data?.collected?.metadata?.description}</li>
        <li><strong>Last version:</strong> {data?.collected?.metadata?.version}</li>
        <li><strong>Number of stars:</strong> {data?.collected?.github?.starsCount}</li>
      </ul>
    </div>
  )
}


export default App;