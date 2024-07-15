import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/NotBlankk/outstagram "
          h3="Outstagram"
          p="Social Media App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/NotBlankk/admc"
          h3="ADMC"
          p="Agriculture Developement 
          Marketing Co-operative"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/NotBlankk/ReactNative"
          h3="HotelGo"
          p="Air BnB Clone"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="SAFE"
          p="Password Manager/Autotyper"
        />
      </div>
    </section>
  );
}

export default Projects;
