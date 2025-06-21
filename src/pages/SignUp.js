import React from "react";

function SignUp() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
