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

const Home = () => {
  const [allLights, setAllLights] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(`${prefix}/lights`);
    console.log(data.data);
    setAllLights(data.data);
  };
  let resChart = null;
  if (allLights.length) {
    resChart = (
      <LineChart
        width={700}
        height={300}
        data={allLights}
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
    );
  }

  let resTable = null;
  if (allLights.length) {
    resTable = (
      <Table
        height={250}
        data={allLights}
        bordered
        style={{ borderRadius: "0.5rem" }}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>Light ID</HeaderCell>
          <Cell dataKey="_id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>Location</HeaderCell>
          <Cell dataKey="location" />
        </Column>

        <Column width={100}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>
        <Column width={100}>
          <HeaderCell>Consumption</HeaderCell>
          <Cell dataKey="watts" />
        </Column>
        <Column width={200}>
          <HeaderCell>Updated At</HeaderCell>
          <Cell dataKey="updatedAt" />
        </Column>
      </Table>
    );
  }

  return (
    <div>
      <PanelGroup accordion bordered>
        <Panel header="Thane" defaultExpanded>
          <Grid fluid>
            <Row>
              <Col xs={24} sm={12}>
                {resChart}
              </Col>

              <Col xs={24} sm={12}>
                {resTable}
              </Col>
            </Row>
          </Grid>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
