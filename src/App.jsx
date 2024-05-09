import React, { Component, useState } from "react";
import ApexCharts from "apexcharts";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import styled from "styled-components";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ChartArea from "./components/ChartArea";
import './App.css';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {},
      Data1: {},
    };
  }

  search = async (event) => {
    this.setState({
      Id: this.exe,
      Data: this.state.Data,
      Data1: this.state.Data1,
    });

    await event.preventDefault();
    this.fetchData();
  };

  handleSubmit = async (event) => {
    console.log(event.target.value);
    await this.setState({
      Id: event.target.value,
      Data: this.state.Data,
      Data1: this.state.Data1,
    });
    this.fetchData();
  };

  exe = "";

  submit = async (event) => {
    if (event.target.value === "cardano") {
      this.exe = "cardano";
    } else if (event.target.value === "avalanche-2") {
      this.exe = "avalanche-2";
    } else if (event.target.value === "bitcoin") {
      this.exe = "bitcoin";
    } else if (event.target.value === "binancecoin") {
      this.exe = "binancecoin";
    } else if (event.target.value === "decentraland") {
      this.exe = "decentraland";
    } else if (event.target.value === "dogecoin") {
      this.exe = "dogecoin";
    } else if (event.target.value === "ethereum") {
      this.exe = "ethereum";
    } else if (event.target.value === "ripple") {
      this.exe = "ripple";
    } else if (event.target.value === "solana") {
      this.exe = "solana";
    } else if (event.target.value === "tether") {
      this.exe = "tether";
    } else {
      this.setState({
        Id: this.state.Id,
        Data: this.state.Data,
        Data1: this.state.Data1,
      });
    }
  };

  fetchData = async () => {
    const dataNew = await fetch(
      "https://api.coingecko.com/api/v3/coins/" + this.state.Id
    );
    const fetchedData = await dataNew.json();
    const marketData = await fetchedData.market_data;
    this.setState({ Id: this.state.Id, Data: marketData, Data1: fetchedData });
  };

  componentDidMount() {
    this.fetchData();
    // this.interval = setInterval(() => this.fetchData(), 2000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <>
        <Main1>
          <Header
            Id={this.state.Id}
            Data={this.state.Data}
            current_price={this.state.Data1}
            handleSubmit={this.handleSubmit}
            submit={this.submit}
            search={this.search}
          />
          <CardSection
            Id={this.state.Id}
            Data={this.state.Data}
            marketCap={this.state.Data ? this.state.Data.market_cap_change_percentage_24h : "Hii"}
          />

          <ChartArea
            Id={this.state.Id} MarketCap={this.state.Data.market_cap ? this.state.Data.market_cap.usd : ""} priceChange24={this.state.Data.price_change_24h}
            TotVol={this.state.Data.total_volume ? this.state.Data.total_volume.usd  : ""}
            Circulating= {this.state.Data ? this.state.Data["circulating_supply"] : ""}
            twitterF = {this.state.Data1.community_data ? this.state.Data1.community_data.twitter_followers : ""}

            current_price={this.state.Data.current_price ? this.state.Data.current_price.usd : " "}
          />
        </Main1>
      </>
    );
  }
}

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default App;
