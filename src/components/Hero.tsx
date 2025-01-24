import { useMemo } from "react"; 
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";

import bannerImg from "../assets/live-striming.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/live-streaming");
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-4xl font-semibold text-black-600 leading-normal">
              Iqba <span className="text-yellow-500">Live Streaming</span>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Start Your own livestream. Share your experiences with the world
              in real-time—whether you’re broadcasting a gaming session, a
              special event, or everyday moments. Connect with audiences
              anywhere and let them see the world through your eyes—live and
              unfiltered.
            </p>
            <button
              onClick={handleClick}
              className="bg-yellow-500 hover:bg-yellow-600 py-3 px-8 text-black font-semibold rounded-md 
                         hover:-translate-y-1 transition-all duration-200 ease-in"
            >
              Get Started
            </button>
          </div>

          
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img src={bannerImg} alt="Live Streaming Banner" />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
