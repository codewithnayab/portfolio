import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ecommerce App " />
            </div>
            <div className="text-content">
              <h2>
              Favorite: Your ultimate destination for stylish, affordable, and trendy online shopping!
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with MERN stack & Tailwind CSS for a seamless, modern shopping experience."
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                
                <a href="https://imagifyai-alpha.vercel.app/">
                <img
                  src="/images/project2.png"
                  alt="AI Image Generator"
                />
              </a>
              </div>
              <h2>  Imagify: AI-powered text-to-visual transformation with MERN stack.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
              <a href="https://coca-cola-51av.vercel.app/">
              <img src="/images/project3.png" alt="zentry" />

              </a>
                
              </div>
              <h2>Animated Coca-Cola website design showcasing bold visuals, smooth transitions, and interactivity.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;