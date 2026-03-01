import "./Valentine.css";

// Change numbers if your count is different
const images = Array.from({ length: 3 }, (_, i) =>
  require(`../assets/v${i + 1}.jpeg`)
);

// const videos = Array.from({ length: 1 }, (_, i) =>
//   require(`../assets/vd${i + 1}.mp4`)
// );

const Valentine = () => {
  return (
    <section className="valentine-section">

      {/* Center Heading */}
      <div className="valentine-header">
        <h1>Valentine's Day Celebration 💖</h1>
        <p>Memorable and romantic moments from our special event</p>
      </div>

      {/* Image Grid */}
      <div className="valentine-grid">
        {images.map((image, index) => (
          <div key={index} className="valentine-card">
            <img src={image} alt={`Valentine ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Video Section */}
      {/* <div className="valentine-video-section">
        <h2>Special Valentine Moments 🎥</h2>
        <div className="valentine-video-grid">
          {videos.map((video, index) => (
            <div key={index} className="valentine-video-card">
              <video controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div> */}

    </section>
  );
};

export default Valentine;