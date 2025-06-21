import React from "react";

function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Unlock Your Brand's <span style={{ color: "#007bff" }}>Potential.</span></h1>
      <p>
        Whether you're a business looking to amplify your message or a creator ready to collaborate,
        CreateKonnect is your gateway to impactful partnerships.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <div style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem", width: "200px" }}>
          <h3>For Advertisers</h3>
          <p>Find the perfect influencers to showcase your products.</p>
          <button>Start as Advertiser</button>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem", width: "200px" }}>
          <h3>For Creators</h3>
          <p>Partner with exciting brands and grow your audience.</p>
          <button>Start as Creator</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
