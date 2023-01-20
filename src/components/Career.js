import "../styles/Career.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Career() {
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "top center",
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -150,
        y: -50,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "top center",
        },
      }
    );
  };

  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 150,
        y: 50,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInLeft("#career-1");
  }, []);

  useEffect(() => {
    slideInTop("#career-2", "0.6", "0.7");
  }, []);

  useEffect(() => {
    slideInRight("#career-3", "0.8", "0.8");
  }, []);

  return (
    <div className="career" id="about">
      <article id="career-1" className="career-1">
        <h2>Développeur Web Freelance</h2>
        <p>
          Mon savoir faire englobe la création, la maintenance et la mise à jour
          de site internet, de vos logiciel et de la vie digitale de votre
          entreprise plus généralement. <br />
          <br />
          Travailleur indépendant, réactif et organisé, je serai heureux de vous
          accompagner dans vos différents projets professionnels ou personnels
          sur du front-end ou du back-end.
        </p>
      </article>
      <article id="career-2" className="career-2">
        <h2>Frontend Développeur</h2>
        <p>
          Je développe le visuel de votre site internet ou de vos applications
        </p>
        <h3>Langages :</h3>
        <ul className="list_career">
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </article>
      <article id="career-3" className="career-3">
        <h2>Backend Développeur</h2>
        <p>
          Je développe votre base de donnée et l'ensemble des fetch nécessaire
          au bon fonctionnement du votre projet
        </p>
        <h3>Langages :</h3>
        <ul className="list_career">
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </article>
    </div>
  );
}

export default Career;
