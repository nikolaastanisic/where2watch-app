import "./movies.jsx";
import Header from "@components/header.jsx";

const Home = () => {
  return (
    <>
      <Header key={self.crypto.randomUUID()} />
      <div className="secondPart">
      <div className="sectionOne">
          <div className="title">New releases :</div>
        <img src="dune.jpg" alt="" />
        <h2>Dune: Part Two</h2>
        <p>Director : Denis Villeneuve</p>
        <p>Genre : science fiction film</p>
        </div>
        <div className="sectionOne">
          <div className="title">New releases :</div>
        <img src="demon-slayer-sanemi-obanai.jpg" alt="" />
        <h2>Demon Slayer: To the Hashira Training</h2>
        <p>Director : Haruo Sotozaki</p>
        <p>Genres: Animation, Action, Fantasy</p>
        </div>
        
        <div className="sectionTwo">
          <div className="title">Award-winning title :</div>
        <img src="oppen.jpg" alt="" />
        <h2>Oppenheimer</h2>
        <p>Director and writer : Cristopher Nolan</p>
        <p>Genre : biographical drama film</p>
        </div>
      </div>
    </>
  );
};

export default Home;
