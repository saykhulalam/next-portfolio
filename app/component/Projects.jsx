import React from "react";
import Container from "./Container";
import Title from "./Title";
import ProjectsItemLeft from "./ProjectsItemLeft";
import hankockDextop from "../assats/hankockDextop.png";
import ProjectsItemRight from "./ProjectsItemRight";
import coffeImage from "../assats/coffe.png";
import innoviteImage from "../assats/innoviteImage.png";
import excluImage from "../assats/exclu.png";
import logoipsome from "../assats/logoipsome.png";
import highking from "../assats/highking.png";
import gymland from "../assats/gym-land.png";

const Projects = () => {
  return (
    <section
      id="Projects"
      className=" bg-white dark:bg-dark-bg xl:pt-10 pb-10 py-10 duration-200"
    >
      <Container>
        <Title Name="PROJECTS" className="mb-10" />
        <div className="mt-14">
          <ProjectsItemLeft
            LinkUrl="https://exclusive-wab.netlify.app/"
            ImageUrl={excluImage}
            Name=" E_COMMERCE REACT JS PROJACT"
            Peragraph="This project is built using React.js for the frontend, ensuring a dynamic and interactive user experience. To style the application, I have used Tailwind CSS, which provides utility-first CSS classes to design responsive layouts efficiently. The website includes key features such as product listings, a shopping cart, and a checkout process to simulate a real e-commerce platform.The demo website is hosted for free on Netlify."
          />
        </div>
        <div className="xl:mt-20">
          <ProjectsItemRight
            LinkUrl="https://hancok-game.netlify.app/"
            ImageUrl={hankockDextop}
            Name="RAW HTML CSS PROJACT"
            Peragraph="In this project, I created a website that is fully responsive. The website adapts seamlessly to various screen sizes, providing an optimal viewing experience across all devices. The website was built using raw HTML, CSS,  and it is hosted for free on Netlify."
          />
        </div>
        <div className="mt-14">
          <ProjectsItemLeft
            LinkUrl="https://coffe-shope.netlify.app"
            ImageUrl={coffeImage}
            Name="HTML TAILWIND PROJACT"
            Peragraph="In this demo project, I created a fully responsive website using HTML and the Tailwind CSS framework. The website adapts seamlessly to various screen sizes, providing an optimal viewing experience across all devices. and it is hosted for free on Netlify."
          />
        </div>
        <div className="xl:mt-20">
          <ProjectsItemRight
            LinkUrl="https://innovate-wabe.netlify.app/#"
            ImageUrl={innoviteImage}
            Name="HTML-BOOTSTARP PROJACT"
            Peragraph="In this project, I created a website that is not fully responsive. The website was built using HTML, CSS, and the Bootstrap framework, and it is hosted for free on Netlify."
          />
        </div>
        <div className="mt-14"></div>
        <div className="xl:mt-20">
          <ProjectsItemLeft
            LinkUrl="https://logoipsome.netlify.app/"
            ImageUrl={logoipsome}
            Name="HTML-BOOTSTARP PROJACT"
            Peragraph="In this project, I created a website that is not fully responsive. The website was built using HTML, CSS, and the Bootstrap framework, and it is hosted for free on Netlify."
          />
        </div>
        <div className="mt-14"></div>
        <div className="mt-14">
          <ProjectsItemRight
            LinkUrl="https://highking-wabe.netlify.app/"
            ImageUrl={highking}
            Name="RAW HTML CSS PROJACT"
            Peragraph="In this project, I created a website that is fully responsive. The website adapts seamlessly to various screen sizes, providing an optimal viewing experience across all devices. The website was built using raw HTML, CSS,  and it is hosted for free on Netlify."
          />
        </div>
        <div className="xl:mt-20"></div>
        <div className="xl:mt-20">
          <ProjectsItemLeft
            LinkUrl="https://gym-land.netlify.app/"
            ImageUrl={gymland}
            Name="HTML TAILWIND PROJACT"
            Peragraph="In this demo project, I created a fully responsive website using HTML and the Tailwind CSS framework. The website adapts seamlessly to various screen sizes, providing an optimal viewing experience across all devices. and it is hosted for free on Netlify."
          />
        </div>
        <div className="mt-14"></div>
      </Container>
    </section>
  );
};

export default Projects;
