import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  let { id } = useParams();
  let [job, setJob] = useState(null);
  let [here, setHere] = useState(null);

  useEffect(() => {
    let url = `https://musofir.pythonanywhere.com/api/v1/job/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setJob(res);
        setHere(true);
      });
  }, [id]);

  if (here) {
    return (
      <div className="pt-5">
         
        <p>{job.user.first_name}</p>
        <p>{job.city.name}</p>
      </div>
    );
  } else {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default JobDetail;
