import React, { useState } from "react";
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
const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
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
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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