import React from "react";

function Home() {
  return <h1>This is from home</h1>;
}
const About = () => {
  return (
    <>
      <div>
        <h1>this is from first div</h1>
      </div>
      <div>
        <h1>This is from second div</h1>
      </div>
    </>
  );
};

export default Home;
export { About };
