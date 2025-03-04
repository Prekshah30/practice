import React from "react";

function DownloadButton({ summary }) {
  const handleDownload = () => {
    const blob = new Blob([summary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: "20px" }}>
      Download Summary
    </button>
  );
}

export default DownloadButton;
