import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContribution = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-semibold mb-4">GitHub Contributions</h2>
      <GitHubCalendar 
        username="AmanKhan-Dev" 
        colorScheme="dark"
        blockSize={15} 
        blockMargin={5} 
        fontSize={14}
      />
    </div>
  );
};

export default GitHubContribution;
