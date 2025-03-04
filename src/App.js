import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import SummaryDisplay from "./components/SummaryDisplay";
import DownloadButton from "./components/DownloadButton";
//import "./index";
import "./App.css";


function App() {
  const [summary, setSummary] = useState("");

  // Function to handle file submission and request the summary
  const handleSummarize = async (files) => {
    const fileData = new FormData();
    files.forEach((file) => fileData.append("files", file));

    try {
      // Simulated API response (remove this when the backend is available)
      const simulatedResponse = { summary: "This is a test summary." };
      setSummary(simulatedResponse.summary);

      // Uncomment below when API is available:
      // const response = await fetch("https://your-api-endpoint/summarize", {
      //   method: "POST",
      //   body: fileData,
      // });
      // const data = await response.json();
      // setSummary(data.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Text Summarization</h1>
        <div className="layout">
          <FileUpload onSummarize={handleSummarize} />
          <SummaryDisplay summary={summary} />
        </div>
        {summary && <DownloadButton summary={summary} />}
      </div>
    </div>
  );
}

export default App;
