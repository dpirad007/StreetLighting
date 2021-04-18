import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { prefix } from "../../Components/Misc/api";
import { Timeline } from "rsuite";

const Records = () => {
  const [records, setRecords] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await axios.get(`${prefix}/records/${id}`);

      setRecords(data.data);
    };
    fetchRecords();
  }, [id]);

  return (
    <div style={{ display: "grid" }}>
      <h3>Maintenance Records</h3>
      <Timeline style={{ padding: "1rem" }}>
        {records.length ? (
          records.map((rec, i) => <Timeline.Item key={i}>{rec}</Timeline.Item>)
        ) : (
          <Timeline.Item>None</Timeline.Item>
        )}
      </Timeline>
    </div>
  );
};

export default Records;
