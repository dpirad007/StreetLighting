import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { prefix } from "../../Components/Misc/api";
import { Timeline, List } from "rsuite";

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
          records.map((rec, i) => {
            let date = rec.split(",");
            return <Timeline.Item key={i}>{date[1]}</Timeline.Item>;
          })
        ) : (
          <Timeline.Item>None</Timeline.Item>
        )}
      </Timeline>
      <List bordered>
        {records.map((item, index) => {
          let record = item.split(",");
          return (
            <List.Item key={index} index={index}>
              {record[0]}
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default Records;
