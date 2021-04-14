import React, { useEffect, useState } from "react";
import axios from "axios";
import { PanelGroup, Panel, Grid, Row, Col, Table } from "rsuite";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { prefix } from "../../Components/Misc/api";
const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    id: "1",
    watts: 1000,
  },
  {
    id: "2",
    watts: 4000,
  },
  {
    id: "3",
    watts: 2000,
  },
  {
    id: "4",
    watts: 3000,
  },
  {
    id: "5",
    watts: 4000,
  },
  {
    id: "6",
    watts: 1000,
  },
  {
    id: "7",
    watts: 2000,
  },
  {
    id: "8",
    watts: 4000,
  },
  {
    id: "9",
    watts: 3000,
  },
  {
    id: "10",
    watts: 1000,
  },
];

const tableData = [
  {
    id: 1,
    firstName: "Dion",
    lastName: "pinto",
  },
  {
    id: 2,
    firstName: "Dion",
    lastName: "pinto",
  },
  {
    id: 3,
    firstName: "Dion",
    lastName: "pinto",
  },
  {
    id: 4,
    firstName: "Dion",
    lastName: "pinto",
  },
  {
    id: 5,
    firstName: "Dion",
    lastName: "pinto",
  },
  {
    id: 6,
    firstName: "Dion",
    lastName: "pinto",
  },
];

const Home = () => {
  const [allLights, setAllLights] = useState([]);

  useEffect(() => {
    console.log(prefix);
    fetchData();
  }, []);

  useEffect(() => {
    console.log(allLights);
  }, [allLights]);

  const fetchData = async () => {
    const data = await axios.get(`${prefix}/lights`);
    console.log(data);
    setAllLights(data);
  };

  return (
    <div>
      <PanelGroup accordion bordered>
        <Panel header="Thane" defaultExpanded>
          <Grid fluid>
            <Row>
              <Col xs={24} sm={12}>
                <LineChart
                  width={700}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="id" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="watts"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </Col>

              <Col xs={24} sm={12}>
                <Table
                  height={250}
                  data={tableData}
                  bordered
                  style={{ borderRadius: "0.5rem" }}
                >
                  <Column width={70} align="center" fixed>
                    <HeaderCell>Light ID</HeaderCell>
                    <Cell dataKey="id" />
                  </Column>

                  <Column fixed>
                    <HeaderCell>Location</HeaderCell>
                    <Cell dataKey="firstName" />
                  </Column>

                  <Column>
                    <HeaderCell>Status</HeaderCell>
                    <Cell dataKey="lastName" />
                  </Column>
                </Table>
              </Col>
            </Row>
          </Grid>
        </Panel>
        <Panel header="Pen">yolo</Panel>
        <Panel header="Vashi">folo</Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
