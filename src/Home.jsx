import "./movies.jsx";
import Header from "@components/header.jsx";

const Home = () => {
  return (
    <>
      <Header key={self.crypto.randomUUID()} />
      <div className="secondPart">
      <div className="sectionOne">
          <div className="title">Recently added :</div>
        <img src="dune.jpg" alt="" />
        <h2>Dune: Part Two</h2>
        <p>Director : Denis Villeneuve</p>
        <p>Genre : science fiction film</p>
        <p className="peacock">Watch it on : only in theaters</p>
        </div>
        <div className="sectionTwo">
          <div className="title">Award-winning title :</div>
        <img src="oppen.jpg" alt="" />
        <h2>Oppenheimer</h2>
        <p>Director and writer : Cristopher Nolan</p>
        <p>Genre : biographical drama film</p>
        <p className="peacock">Watch it on : <a href="https://www.peacocktv.com/">Peacock</a></p>
        </div>
      </div>
    </>
  );
};

export default Home;
