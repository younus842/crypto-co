import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import "./ChartArea.css";

export class ChartArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Price: {
        options: {
          charts: {
            id: "area-datetime",
          },
          grid: {
            show: false,
          },
          title: {
            text: "Market Price (USD)",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#ffdd00",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#ffee00"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
          selection: 30,
        },
        series: [
          {
            name: "market Price",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Market_Cap: {
        options: {
          grid: {
            show: false,
          },
          title: {
            text: "Market Cap (USD)",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#ff69f5",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#ff69f5"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
        },
        series: [
          {
            name: "Market Cap (USD)",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Tot_Vol: {
        options: {
          grid: {
            show: false,
          },
          title: {
            text: "Market Volume",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#00ffea",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#00ffea"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
        },
        series: [
          {
            name: "Market Volume",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
    };
    this.prevSelection = this.state.Price.options.selection;
  }

  chartId = this.props.Id;

  ChartData = async () => {
    let areaData = await fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        this.props.Id +
        "/market_chart?vs_currency=usd&days=" +
        this.state.Price.options.selection
    );
    let newData = await areaData.json();
    this.setState({
      Price: {
        options: this.state.Price.options,
        series: [{ name: "Market Price", data: newData.prices }],
      },
    });

    this.setState({
      Market_Cap: {
        options: this.state.Market_Cap.options,
        series: [{ name: "market Price", data: newData.market_caps }],
      },
    });

    this.setState({
      Tot_Vol: {
        options: this.state.Tot_Vol.options,
        series: [{ name: "market Price", data: newData.total_volumes }],
      },
    });
  };

  componentDidMount() {
    this.ChartData();
    // this.interval = setInterval(() => this.ChartData(), 2000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  componentDidUpdate() {
    if (this.chartId !== this.props.Id) {
      this.chartId = this.props.Id;
      this.ChartData();
    }

    if (this.prevSelection !== this.state.Price.options.selection) {
      this.prevSelection = this.state.Price.options.selection;
      this.ChartData();
    }
  }

  func1 = () => {
    this.setState({
      Price: {
        options: { ...this.tooltip, selection: "1" },
        series: this.state.Price.series,
      },
    });
  };

  funcw = () => {
    this.setState({
      Price: {
        options: { ...this.tooltip, selection: "7" },
        series: this.state.Price.series,
      },
    });
  };

  funcm = () => {
    this.setState({
      Price: {
        options: { ...this.tooltip, selection: "30" },
        series: this.state.Price.series,
      },
    });
  };

  func6m = () => {
    this.setState({
      Price: {
        options: { ...this.tooltip, selection: "180" },
        series: this.state.Price.series,
      },
    });
  };

  funcyear = () => {
    this.setState({
      Price: {
        options: { ...this.tooltip, selection: "365" },
        series: this.state.Price.series,
      },
    });
  };

  render() {
    return (
      <div className="app">
        <Card>
          <Box>
            <div className="para">Click below ↓ to see the time frame </div>
            <div className="btns">
              <button onClick={this.func1}>1 DAY</button>
              <button onClick={this.funcw}>WEEK</button>
              <button onClick={this.funcm}>MONTH</button>
              <button onClick={this.func6m}>6MONTH</button>
              <button onClick={this.funcyear}>1 YEAR</button>
            </div>
          </Box>
          <div className="card_part">
            <div className="coin">
              <p>Showing Results for </p>
              <h1>{this.props.Id.toUpperCase()}</h1>
            </div>
            <div className="current_price">
              <p>Current Price</p>
              <h1>${this.props.current_price}</h1>
            </div>
          </div>
        </Card>
        <Main className="row">
          <div className="div1">
            <div className="mixed-chart">
              <Chart className="chart1"
                options={this.state.Price.options}
                series={this.state.Price.series}
                type="area"
                width="650"
              />
            </div>
          </div>
          <div className="div2">
            <div className="col" style={{ maxWidth: "200px" }}>
              <div className="card-body ">
                <h6>Market Cap</h6>
                <p>${this.props.MarketCap}</p>
              </div>

              <div className="card-body ">
                <h6>Price Change 24hrs</h6>
                <p>$ {this.props.priceChange24}</p>
              </div>
              <div className="card-body ">
                <h6>Total Volume</h6>
                <p>$ {this.props.TotVol}</p>
              </div>
              <div className="card-body ">
                <h6>Circulating Supply</h6>
                <p>{this.props.Circulating}</p>
              </div>
              <div className="card-body ">
                <h6>Twitter Followers</h6>
                <p>{this.props.twitterF}</p>
              </div>
            </div>
          </div>
          <div className="div3">
            <div className="mixed-chart">
              <Chart
                options={this.state.Market_Cap.options}
                series={this.state.Market_Cap.series}
                type="line"
                width="350"
              />
            </div>
            <div className="mixed-chart2">
              <Chart
                options={this.state.Tot_Vol.options}
                series={this.state.Tot_Vol.series}
                type="line"
                width="350"
              />
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

const Card = styled.div`
  @media screen and (max-width: 719px) {
    display: flex;
    flex-direction: column;
  }
  .card_part {
    display: flex;
    gap: 80px;
  }
  display: flex;
  gap: 110px;
  h1 {
    color: yellow;
    text-align: center;
    margin: 0px 0px 0px 0px;
    font-size: 65px;
    text-shadow: 2px 2px 4px #eaff00;
  }
  p {
    text-align: center;
    margin: 0px 0px 0px 0px;
  }
`;

const Box = styled.div`
  @media screen and (max-width: 719px) {
    button {
      min-width: 120px;
      font-size: 24px;
    }
  }
  button {
    width: 80px;
    height: 40px;
    color: aquamarine;
    background: transparent;

    border-radius: 5px;
    border: 1px solid aquamarine;
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
    &:hover {
      transition: 0.7s ease;
      border: 1px solid aquamarine;
      color: black;
      background-color: #5bbc9c;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(65, 62, 62, 0.494),
        0 6px 20px 0 rgba(151, 133, 133, 0.757);
    }
  }
  .btns {
    display: flex;
    gap: 30px;
    margin: 20px 0px 35px 30px;
  }
  .para {
    text-align: center;
  }
`;

const Main = styled.div`
  @media only screen and (min-width: 1300px) and (max-width: 2500px) {
    margin-left: 20px;
    box-shadow: 0px 4px 0px 0 rgba(238, 230, 230, 0.696),
      0 6px 20px 0 rgba(214, 206, 206, 0.693);
    display: flex;
    flex-direction: row;
    gap: 40px;

    .div1 {
      max-width: 650px;
      display: flex;
      align-items: end;
    }

    .div2 {
      max-width: 220px;
      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
      margin: 20px 0px 30px 0px;

      .card-body {
        border-radius: 10px;
        text-align: start;
      }

      .col {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin: 60px 0px 0px 0px;
        gap: 4px;
      }

      * {
        padding: 0px;
      }
      h6 {
        font-weight: 600;
        font-size: 16px;
      }
      p {
        font-weight: 600;
        color: pink;
      }
    }

    .div3 {
      max-width: 350px;
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1299px) {
    box-shadow: 0px 4px 0px 0 rgba(238, 230, 230, 0.696),
      0 6px 20px 0 rgba(214, 206, 206, 0.693);

    display: flex;
    justify-content: space-around;
    min-width: 1300px;

    .div1 {
      display: flex;
      align-items: end;
      max-width: 650px;
    }

    .div2 {
      display: none;
    }

    .div3 {
      .mixed-chart2 {
        display: none;
      }
      max-width: 350px;

      display: flex;
      flex-direction: column;
      justify-content: end;
    }
  }

  @media screen and (max-width: 719px) {
    min-width: 1050px;

    display: flex;
    flex-direction: row;

    .div2 {
      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
      margin: 20px 0px 30px 0px;

      .card-body {
        border-radius: 10px;
        text-align: start;
      }

      .chart1{
        max-width: max-content;
      }

     

      .col {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin: 60px 0px 0px 0px;
        gap: 4px;
      }

      * {
        padding: 0px;
      }
      h6 {
        font-weight: 600;
        font-size: 16px;
      }
      p {
        font-weight: 600;
        color: pink;
      }
    }

    .div3 {
      display: flex;
      flex-direction: row;
      width: 90vw;
    }

    .div1_div2 {
      display: flex;
    }
  }
`;
export default ChartArea;
