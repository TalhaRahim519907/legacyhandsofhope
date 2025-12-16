// Gallery.jsx
import React from "react";

const Gallery = () => {
  const galleryItems = [
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkf3nLesokRyCQYcM3ZK-FVDkn36mZqK-WH5hKg6pyxJp9h5dnEmZOi-re2aZ1yTe_bK405hC8V2lhrkyyG85to7Byi_4q7Aj1q3XN9zJrWmbp0x1O60ii3unegaJAUdmEC6kvLUzUY9a-N_NJbtp4XeTu62_XJuIZGFypWdPQDwdgGdthhgOlrubyf9p532nRvLHAfFcYPDJjX4VBWDB2kFUvqnAPXnx4Lv2iw=w1280",
      link: "https://photos.app.goo.gl/vygpiX4JMMcqbbZc6",
      alt: "Rose Fest",
      text: "View Rose Fest Pics →"
    },
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkdHao_w7RN28XbVPLjbusnBgBcdc17fgh3JeaAZXxRFqTqxnzCfc3AbQr71Gp4tF41Rh4FWPiY721gJrcDA8-pdqMQMoSifQUapMJswdKfmCoJM7cXVH9QRSPOVNvRWu7Ywt_rsnK8e-mVOIn7qhyr9bEetDgMbfxbtogFuNOyny-oH7mupvn89=w1280",
      link: "https://collinsasenso.pixieset.com/lhohwebsite/",
      alt: "LHOH Website Gallery",
      text: "View Gallery →"
    }
  ];

  return (
    <section className="gallery">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          OUR IMPACT IN ACTION
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.img} alt={item.alt} />
              <div className="gallery-overlay">
                <a href={item.link} className="gallery-link">{item.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
