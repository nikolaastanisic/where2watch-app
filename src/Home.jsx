import "./movies.jsx";
import Header from "@components/header.jsx";

const Home = () => {
  return (
    <>
      <Header key={self.crypto.randomUUID()} />
      <div className="secondPart">
        <div className="sectionOne">Recently added :</div>
        <div className="sectionTwo">Our recommendation :</div>
      </div>
    </>
  );
};

export default Home;
