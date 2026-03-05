import React from "react";
import "./team.css";
import rebeccaImg from "../assets/Rebecca Crumbley.jpg";
import natashaImg from "../assets/Natasha Moore.jpg";
import christineImg from "../assets/Christine Hoyte.jpg";
import charityImg from "../assets/Charity-logo.jpg";
// import alissaImg from "../assets/Alissa-Gittens.jpg";
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
            <p className="member-email">
              <a href="mailto:Rebeccacrumbley@lhoh.org">Rebeccacrumbley@lhoh.org</a>
            </p>
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
            <p className="member-email">
              <a href="mailto:natashamoore@lhoh.org">natashamoore@lhoh.org</a>
            </p>
            <p className="member-description">
              Natasha Moore is a purpose driven leader whose life journey from Guyana
              to the United States shaped her deep commitment to service, 
              resilience, and community empowerment. Her global perspective, 
              cultivated through years as a flight attendant, has given her 
              firsthand insight into both the richness of diverse cultures and 
              the common challenges communities face around the world.
            </p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>
              As Chief Financial Officer of Legacy Hands of Hope, Natasha brings together financial stewardship, entrepreneurial vision, and compassionate leadership. She is committed to building systems that do more than provide temporary relief to create sustainable pathways to long-term self-sufficiency. Her approach is grounded in accountability and strategic partnerships that strengthen communities from within.
            </p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>
              Natasha is dedicated to advancing solutions that empower individuals and families to overcome barriers and thrive independently. She believes meaningful impact requires more than good intentions; it demands structure and collaboration.
            </p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>Natasha’s mission is clear: to help build resilient communities equipped with the resources, tools, and confidence to shape their own futures. Through Legacy Hands of Hope, she is working to foster transformation that crosses borders, bridges socioeconomic divides, and creates lasting opportunity.</p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>She welcomes collaboration with individuals, organizations, and partners who share a commitment to sustainable change and community-driven impact.</p>
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
            <p className="member-email">
              <a href="mailto:Christinehoyte@lhoh.org">Christinehoyte@lhoh.org</a>
            </p>
            <p className="member-description">
              Christine Hoyte is the Co-Founder and Chief Operating Officer of Legacy Hands of Hope (LHOH), a nonprofit organization dedicated to advancing health equity and empowering underserved communities within the African and Caribbean diaspora. As an immigrant from South America, Christine’s personal journey fuels her unwavering commitment to dismantling systemic barriers that disproportionately impact marginalized populations.
            </p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>
              With a professional foundation in emergency medicine, Christine has served in high-acuity hospital settings where precision, leadership, and resilience are critical. She is currently advancing her clinical expertise as a Nurse Practitioner student. Christine holds a Master of Science in Nursing and a master’s degree in clinical psychology, uniquely positioning her at the intersection of physical and mental health care.
            </p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>
              Her multidisciplinary background equips her to address complex health disparities rooted in poverty, limited access to education, and structural inequities. Christine has participated in international humanitarian efforts, including medical and educational supply distribution during the Ebola crisis in Liberia and Sierra Leone, and community initiatives in Guyana.
            </p>
            <p className="member-description" style={{ marginTop: "0.75rem" }}>
              Through Legacy Hands of Hope, she champions sustainable solutions that empower communities to reclaim their health, dignity, and future.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Team;
