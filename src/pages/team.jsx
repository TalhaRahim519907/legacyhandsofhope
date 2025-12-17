import React from "react";
import "./team.css";
import rebeccaImg from "../assets/Rebecca Crumbley.jpg";
import natashaImg from "../assets/Natasha Moore.jpg";
import christineImg from "../assets/Christine Hoyte.jpg";
import charityImg from "../assets/Charity-logo.jpg";
import alissaImg from "../assets/Alissa-Gittens.jpg";
const Team = () => {
  return (
    <>
      {/* Header Section */}
      <div className="team-header">
        <div className="header-content">
          <img
            src={charityImg}
            alt="LHOH Charity Logo"
            className="header-logo"
          />
          <div className="header-text">
            <h1>THE TEAM</h1>
            <p>
              Founded in October 2024, LHOH's headquarters is located in Virginia,
              but the organization operates globally, with a special focus on African
              and Caribbean diaspora communities.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Leadership Section */}
      <div className="section-title-bar">
        <h2>EXECUTIVE LEADERSHIP AND FOUNDERS</h2>
      </div>

      <div className="main-container">
        {/* Rebecca Crumbley - Executive Director */}
        <div className="team-member-full">
          <img
            src={rebeccaImg}
            alt="Rebecca Crumbley"
            className="member-image-full"
          />
          <div className="member-info-full">
            <h3>Rebecca Crumbley</h3>
            <p className="member-title">Executive Director</p>
            <p className="member-bio">
              Rebecca E. Crumbley is an accomplished career aviation industry
              professional, entrepreneur, philanthropist, and the co-founder and
              Chief Executive Officer of Legacy Hands of Hope (LHOH), a non-profit
              organization. In her role as CEO, she is responsible for shaping the
              organization's strategic vision, guiding its direction, and ensuring
              mission realization, all while fostering meaningful stakeholder
              engagement.
            </p>
            <p className="member-bio">
              With over 17 years of experience as a Flight Attendant, Rebecca's
              passion for aviation, service, and helping others has shaped her
              professional journey. It was in this role that she discovered her deep
              commitment to service and compassion.
            </p>
            <p className="member-bio">
              Beyond her work in aviation, Rebecca is also an entrepreneur, owning
              two successful businesses that evolved from passion projects into
              high-demand, profitable ventures. Her success in these businesses
              highlights her business savvy, networking skills, and ability to
              connect with people in diverse ways.
            </p>
            <p className="member-bio">
              When she's not busy with her professional pursuits, Rebecca enjoys
              spending quality time with her husband, watching African cinema, and
              planning her next community engagement. She and her husband are proud
              parents of two adult sons and have one cherished granddaughter, whom
              they adore.
            </p>
          </div>
        </div>

        {/* Natasha Moore & Christine Hoyte */}
        <div className="team-grid">
          {/* Natasha Moore */}
          <div className="team-member">
            <img
              src={natashaImg}
              alt="Natasha Moore"
              className="member-image"
            />
            <h3 className="member-name">Natasha Moore</h3>
            <p className="member-position">Chief Financial Officer</p>
            <p className="member-description">
              Natasha Moore is a dedicated flight attendant whose global experiences
              have fueled her passion for community engagement and positive impact.
              Growing up in Guyana before migrating to the United States, Natasha has
              brought a unique perspective to her work and commitment to community
              and sustainable change.
            </p>
            <p className="member-description" style={{ marginTop: "1rem" }}>
              Harnessing the legacy from her mother, Rebecca Crumbley, Natasha is
              focused on creating lasting, transformative solutions beyond temporary
              relief. Legacy Hands of Hope empowers communities to build
              self-sufficiency, resilience, and the tools to overcome any challenge.
              Natasha's passion for people and cultures and her entrepreneurial
              spirit led to her dedication to innovative ideas and transforming
              partnerships that elevate communities.
            </p>
            <p className="member-description" style={{ marginTop: "1rem" }}>
              Her mission is to create a foundation for long-term, sustainable
              self-sufficiency that transcends geographical and socioeconomic
              boundaries. Natasha Moore believes in making the world a more just and
              equitable place. Through Legacy Hands of Hope, Natasha's bold vision
              paves the way for deeply transformative changes that touches.
            </p>
          </div>

          {/* Christine Hoyte */}
          <div className="team-member">
            <img
              src={christineImg}
              alt="Christine Hoyte"
              className="member-image"
            />
            <h3 className="member-name">Christine Hoyte</h3>
            <p className="member-position">Chief Operating Officer</p>
            <p className="member-description">
              Christine Hoyte is one of the co-founders and Chief Operating Officer
              of Legacy Hands of Hope (LHOH). She is an immigrant from South America,
              and her journey has fueled her passion for using her skills and
              resources to advocate for marginalized communities. She brings a deep
              commitment to healthcare, education, and community service. She draws
              on her diverse professional background and personal experiences to
              make a meaningful impact on the lives of others.
            </p>
            <p className="member-description" style={{ marginTop: "1rem" }}>
              Christine's career includes serving as an emergency medicine, has worked
              in high-pressure hospital environments. She is also a nurse practitioner
              student for better or for worse. Christine holds a Master's degree in
              clinical psychology, showcasing her dedication to lifelong learning
              and holistic patient care.
            </p>
            <p className="member-description" style={{ marginTop: "1rem" }}>
              Her diverse skill set has placed her in a unique position to address the
              complex needs of individuals in vulnerable populations. She is passionate
              about tackling health disparities, recognizing that barriers such as
              limited access to healthcare, inadequate education, and poverty
              perpetuate cycles of poor health and violence, distributing school
              supplies and medical equipment during the Ebola crisis in Liberia and
              Sierra Leone, and supporting charitable causes in her home country of
              Guyana. This hands-on involvement in global humanitarian efforts
              underscores her unwavering commitment to making a difference.
            </p>
            <p className="member-description" style={{ marginTop: "1rem" }}>
              Christine strongly believes in the power of giving back. Her desire to
              uplift communities facing social, health, and economic challenges
              drives her work with Legacy Hands of Hope. Christine believes in
              empowering people to reclaim their health and their lives.
            </p>
          </div>
        </div>
      </div>

      {/* Operations Section */}
      <div className="section-title-bar">
        <h2>OPERATIONS</h2>
      </div>

      <div className="main-container operations-section">
        <div className="operations-member">
          <img
            src={alissaImg}
            alt="Alissa Gittens"
            className="operations-image"
          />
          <div className="operations-info">
            <h3>Alissa Gittens</h3>
            <p className="member-position">Web Manager</p>
            <p className="member-description">
              Alissa Gittens is a Communications Manager and Education in Maryland
              Schools, where she champions the transformative power of the arts. A
              proud graduate of Morgan State University with a B.S. in Music
              Education and Music Production and Sound Recording. As a performer,
              she has been a featured and flute instructor and Music Services,
              providing personalized flute instruction and performance services. As a
              performer, she has been a featured and renowned artists, including The
              Phantoms and the (Hamonic, Tramaine Hawkins, and Jason Nelson.
            </p>
            <p className="member-description" style={{ marginTop: "1rem" }}>
              A strong advocate for arts and mental health for children in the
              Caribbean, Alissa founded "Inc Urient Mauritorian Baltimore City & PG
              County", an initiative focused in Maryland. Joining the MusicBridge,
              teaming up receives more on building meaningful partnerships with the
              fund.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
