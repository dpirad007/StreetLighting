import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { navKeyContext } from "../../context";
import axios from "axios";
import { Notification, Loader } from "rsuite";
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

const open = (rowData) => {
  Notification["info"]({
    title: "info",
    description: (
      <div style={{ width: 320 }}>
        <div>Light ID: {rowData.id}</div>
        <div>Light Status: {rowData.status}</div>
        <div>Location: {rowData.location}</div>
        <div>Power Consumption: {rowData.watts} watt</div>
      </div>
    ),
  });
};

const Home = () => {
  const { setNavbarKey } = useContext(navKeyContext);
  setNavbarKey("home");
  const [allClusters, setAllClusters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClusterData();
  }, []);

  const fetchClusterData = async () => {
    const data = await axios.get(`${prefix}/clusters`);
    setAllClusters(data.data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loader content="Loading..." />
      ) : (
        <PanelGroup accordion bordered>
          {allClusters.map((obj) => (
            <Panel header={obj.name}>
              <Grid fluid>
                <Row>
                  <Col xs={24} sm={12}>
                    <LineChart
                      width={700}
                      height={300}
                      data={obj.lights}
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
                      data={obj.lights}
                      bordered
                      style={{ borderRadius: "0.5rem" }}
                    >
                      <Column width={70} align="center" fixed>
                        <HeaderCell>Light ID</HeaderCell>
                        <Cell dataKey="id" />
                      </Column>

                      <Column fixed>
                        <HeaderCell>Location</HeaderCell>
                        <Cell dataKey="location" />
                      </Column>

                      <Column width={60} align="center">
                        <HeaderCell>Status</HeaderCell>
                        <Cell dataKey="status" />
                      </Column>
                      <Column align="center">
                        <HeaderCell>Consumption</HeaderCell>
                        <Cell dataKey="watts" />
                      </Column>
                      <Column width={200}>
                        <HeaderCell>Updated At</HeaderCell>
                        <Cell dataKey="updatedAt" />
                      </Column>
                      <Column align="center">
                        <HeaderCell>More Details</HeaderCell>
                        <Cell style={{ color: "rgb(93, 248, 233)" }}>
                          {(rowData) => {
                            const handleAction = () => {
                              open(rowData);
                            };
                            return (
                              <span>
                                <div
                                  onClick={handleAction}
                                  style={{ cursor: "pointer" }}
                                >
                                  Show
                                </div>
                              </span>
                            );
                          }}
                        </Cell>
                      </Column>
                      <Column align="center">
                        <HeaderCell>Records</HeaderCell>
                        <Cell>
                          {(rowData) => {
                            return (
                              <span>
                                <Link
                                  to={`/records/${rowData._id}`}
                                  style={{
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    color: "rgb(93, 248, 233)",
                                  }}
                                >
                                  Records
                                </Link>
                              </span>
                            );
                          }}
                        </Cell>
                      </Column>
                    </Table>
                  </Col>
                </Row>
              </Grid>
            </Panel>
          ))}
        </PanelGroup>
      )}
    </div>
  );
};

export default Home;
