// Happening.jsx
import React from "react";

const Happening = () => {
  const happenings = [
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkcR-zuaa6PCJWC8GspuQu9x82T2gWKoZrrsJxmwd2SyCYU6A-zHtlPWzDlIWqSUKm0K3-ioEdQtLgJRB7wO5-12JOEkFybKBZZndxCm4DNxRNVwG9gEjFprTptMdSDqzvWNGN4sIcPGDjO-xzeDfLkNOac_BFFMbFbOSTXkLQGeFuGUUXwxTf2zsOtNoJ4nOwWkisutim6y2qvoYBpVgqqICuoBrdXCEgOTXQw=w1280",
      title: "Launching new community education programs",
      desc: "to equip individuals with vocational skills and life skills."
    },
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkduyGF6NSHp1evznMpFwzGeemJ2sg_bzy66jg82XN4z2t1zbggDudZjv2_MATu8AZrxBhZyDPPupg4EEX7oKGwYpym7nI3p18087rGtGYoZJv_gIrAMwPeRlUS97crRUTQsSdFJZGXrMw_QAOHEt6Sp47t58zf0YS5vIwm_w80MtraCaWf7XaZD9maPKGVPPGg5S_NvmEsMArlXR1TuJgCiEo1kgIrpWjrUQ0k=w1280",
      title: "Partnering with local health organizations",
      desc: "to provide wellness support to underserved families."
    },
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkdlTxXq76A1C8w59HMtll0uqQ3m437yhqsLZgxhuuSeTBmC3fxsCyqak9ynyzFP2tWnaPMcB-rikynFP9O2TkT8NLvF89qjz-5XREqWA2WcLuwXnT8MuzLTLEAHTsy9rgqLABNuxqvFjmNF_nRE-vg5eBAzrNdoJS8sRdA6_jNw3hZ5jfVAOxishf6TRvz4wiR0550cQPbaoxQSNYZt5XMY1YSFg3tpj_4=w1280",
      title: "Hosting a fundraising campaign",
      desc: "to raise funds for a new resource center that will offer emergency assistance, job training, and mental health services."
    },
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkdP0b0BSWbVP70h0MzNpYqnKNguAWIRAVSUWdZIVQzXD3gmM0gGPnEMcFjApTqxL_w1w2aBlFQJd9snxcmQ7I_lsuoMAN9oNc9D2yIBdYIKFDCuuIpXfsDrN7AyET6WXkkilLBhmYU1MBJpzp6riDkglBzsO80_8PBP99285KrRj4Si6GaBP1-zCfaVRkkmAQH_0jZlamaKx7pWF-fbRN0ULRKgupNxGPTkr9s=w1280",
      title: "Expanding volunteer opportunities",
      desc: "inviting more individuals to get involved and make a difference in their communities."
    }
  ];

  return (
    <section className="happening">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>WHAT'S HAPPENING</h2>
        <div className="happening-grid">
          {happenings.map((item, index) => (
            <div className="happening-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="happening-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Happening;
