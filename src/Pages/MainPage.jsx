import React, { useEffect, useState } from "react";
import { SimpleSlider } from "../components/UI/index";
import AboutStudents from "../components/Main/AboutStudents";
import StudentsSay from "../components/Main/StudentsSay";
import Premium from "../components/Main/Premium";
import BuildComponent from "../components/Main/BuildComponent";
import About from "../components/Main/About";
import LearnSkill from "../components/Main/LearnSkill";
import Cocktails from "../components/Main/Cocktails";
import { useDispatch } from "react-redux";
import { cocktailsRequests } from "../api/cocktailsRequests";
import Fade from "react-reveal/Fade";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(false);
    dispatch(cocktailsRequests()).finally(() => setIsLoading(true));
  }, []);
  return (
    <main className="main">
      <SimpleSlider />
      <div className="main__inner">
        <div className="main__about">
          <Fade left>
            <About />
          </Fade>
        </div>
        <div className="main__learn-skill">
          <LearnSkill />
        </div>
        <div className="main__cocktails">
          <Cocktails setIsLoading={setIsLoading} isLoading={isLoading} />
        </div>
        <div className="main__about-students">
          <Fade lest>
            <AboutStudents />
          </Fade>
        </div>
        <div className="main__students-say">
          <StudentsSay />
        </div>
        <div className="main__premium">
          <Premium />
        </div>
        <div className="main__build">
          <BuildComponent />
        </div>
      </div>
    </main>
  );
}

export default Main;
