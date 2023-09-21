import { useState, useEffect } from "react";
import JobList from "../components/JobList";
import { getJobs } from "../lib/qraphql/queries";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs));
  }, []);
  console.log("[Homepage] jobs:", jobs);
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
