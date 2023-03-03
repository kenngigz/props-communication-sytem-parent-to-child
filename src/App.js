import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Legends</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Jack Bauer"
                handle="@Jackbauer"
                image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                description="jack@nowhere.com."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Beyonce"
                handle="@beyomce"
                image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                description="b@beyonce.com"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Chuck Norris"
                handle="@Chucknorris"
                image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                description="gmail@chucknorris.com"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
