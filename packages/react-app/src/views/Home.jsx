import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div>
      {!purpose ? (
        <div style={{ margin: 32 }}>
          <span style={{ marginRight: 8 }}>👷‍♀️</span>
          There is something wrong
          <span
            className="highlight"
            style={{
              marginLeft: 4,
              /* backgroundColor: "#f9f9f9", */ padding: 4,
              borderRadius: 4,
              fontWeight: "bolder",
            }}
          >
            please contact support
          </span>{" "}
        </div>
      ) : (
        <div style={{ margin: 32 }}>
          <span style={{ marginRight: 8, marginBottom: 8 }}>🤓</span>
          The current keyword of the BillBoard is <br></br>
          <br></br>{" "}
          <span
            className="highlight"
            style={{
              marginTop: 5,
              marginLeft: 4,
              marginBottom: 20,
              /* backgroundColor: "#f9f9f9", */ padding: 20,
              borderRadius: 4,
              fontWeight: "bolder",
              fontSize: "4em",
            }}
          >
            {purpose}
          </span>
        </div>
      )}
    </div>
  );
}

export default Home;
