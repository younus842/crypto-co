import React from "react";
import styled from "styled-components";

const propTypes = {};
const defaultProps = {};
class CardSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full: "",
    };
  }

  render() {
    return (
      <Container>
         
        <Box>
          <div className="card">
            <div>
              <p>Market Cap</p>
            </div>
            <div className="num">{this.props.marketCap} %</div>
          </div>
        </Box>

        <Box>
          <div className="card">
            <div>
              <p>All Time High</p>
            </div>
            <div className="num">
              ${this.props.Data.ath ? this.props.Data.ath.usd : ""}
            </div>
          </div>
        </Box>

        <Box>
          <div className="card">
            <div>
              <p>All Time Low</p>
            </div>
            <div className="num1">
              ${this.props.Data.atl ? this.props.Data.atl.usd : ""}
            </div>
          </div>
        </Box>

        <Box>
          <div className="card">
            <div>
              <p>high 24h</p>
            </div>
            <div className="num">
              ${this.props.Data.high_24h ? this.props.Data.high_24h.usd : ""}
            </div>
          </div>
        </Box>

        <Box>
          <div className="card">
            <div>
              <p>low 24h</p>
            </div>
            <div className="num1">
              ${this.props.Data.low_24h ? this.props.Data.low_24h.usd : ""}
            </div>
          </div>
        </Box>

        <Box>
          <div className="card">
            <div>
              <p>price Change in 24h</p>
            </div>
            <div className="num2">
              $
              {this.props.Data.price_change_24h_in_currency
                ? this.props.Data.price_change_24h_in_currency.usd
                : ""}
            </div>
          </div>
        </Box>
      </Container>
    );
  }
}

let Box = styled.div`
  display: flex;
  gap: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .card {
    padding: 2px 0px 0px 0px;
    /* background-color: #3c3939; */
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;

    p {
      color: #f1efef;
      font-weight: 600;
      font-size: 16px;
    }
    .num{
      font-size: 15px;
      text-shadow: 2px 2px 4px #427c21;
      color: aquamarine;
    }
    .num1{
      font-size: 15px;
      color: #ff00f2;
      text-shadow: 2px 2px 4px #2c5511;
     
   
    }
    .num2{
      font-size: 15px;
      text-shadow: 2px 2px 4px #aea7a7;
    }
  }
`;

let Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 0px 0px 20px;
`;

CardSection.propTypes = propTypes;
CardSection.defaultProps = defaultProps;

export default CardSection;
