import React, { Component } from "react";
// import { styles } from './Header.css';
import styled from "styled-components";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                crypto.co
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <select
                    className="selection"
                    onChange={this.props.handleSubmit}
                    name="dropdown"
                  >
                    <option value="bitcoin">Select Coin</option>
                    <option href="#/action-1" value="bitcoin">
                      bitcoin
                    </option>
                    <option href="#/action-2" value="avalanche-2">
                      avalanche-2
                    </option>
                    <option href="#/action-3" value="binancecoin">
                      binancecoin
                    </option>
                    <option href="#/action-4" value="cardano">
                      cardano
                    </option>
                    <option href="#/action-5" value="decentraland">
                      decentraland
                    </option>
                    <option href="#/action-6" value="dogecoin">
                      dogecoin
                    </option>
                    <option href="#/action-6" value="ethereum">
                      ethereum
                    </option>
                    <option href="#/action-6" value="ripple">
                      ripple
                    </option>
                    <option href="#/action-6" value="solana">
                      solana
                    </option>
                    <option href="#/action-6" value="tether">
                      tether
                    </option>
                  </select>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Coin"
                    aria-label="Search"
                    onChange={this.props.submit}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={this.props.search}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>       
      </>
    );
  }
}

export default Header;
