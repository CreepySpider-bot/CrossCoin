import "./Test.css";
const Test = () => {
  return (
    <div className="desktop-7">
      <img className="logo-icon" alt="" src="/logo@2x.png" />
      <div className="bg" />
      <img
        className="bitcoin-clipart-md-1-icon"
        alt=""
        src="/bitcoinclipartmd-1@2x.png"
      />
      <img className="shadow-icon" alt="" src="/shadow.svg" />
      <b className="crosscoin">
        <span>Cross</span>
        <span className="coin">Coin</span>
      </b>
      <div className="about-us">About Us</div>
      <div className="login">Login</div>
      <div className="button" />
      <b className="register">Register</b>
      <div className="transfer-you-money-container">
        <p className="transfer-you-money">{`Transfer you money across border `}</p>
        <p className="transfer-you-money">{`stress-free by using power of blockchain `}</p>
      </div>
      <div className="component-1">
        <i className="do-your-transaction">Do your TRANSACTION with</i>
        <div className="less-fees-less-time-more-secur-wrapper">
          <i className="less-fees-less-container">
            <p className="transfer-you-money">Less Fees</p>
            <p className="transfer-you-money">Less Time</p>
            <p className="transfer-you-money">More Security</p>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Test;
