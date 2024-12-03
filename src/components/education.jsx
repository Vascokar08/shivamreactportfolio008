import { useState } from "react";


export const Education = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panelId) => {
    if (activePanel === panelId) {
      setActivePanel(null); // Collapse if the same panel is clicked again
    } else {
      setActivePanel(panelId); // Expand the selected panel
    }
  };

  return (
    <section className="colorlib-education py-20" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row mb-8">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate__animated animate__fadeInLeft">    
            <h2 className="colorlib-heading animate__animated animate__fadeInLeft">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate__animated animate__fadeInLeft">
            <div className="fancy-collapse-panel">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                  <div
                    className="panel-heading cursor-pointer"
                    onClick={() => togglePanel("panel1")}
                    role="tab"
                  >
                    <h4 className="panel-title">
                      <span className="text-lg font-semibold">
                    BACHELOR OF INFORMATION TECHNOLOGY
                      </span>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${activePanel === "panel1" ? "block" : "hidden"}`}
                    role="tabpanel"
                  >
                    <div className="panel-body p-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>7.8 CGPA ,GOA UNIVERSITY,YEAR OF PASSING 2024</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div
                    className="panel-heading cursor-pointer"
                    onClick={() => togglePanel("panel2")}
                    role="tab"
                  >
                    <h4 className="panel-title">
                      <span className="text-lg font-semibold">
                       ST.ANDREW`S HIGHER SECONDARY
                      </span>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${activePanel === "panel2" ? "block" : "hidden"}`}
                    role="tabpanel"
                  >
                    <div className="panel-body p-4">
                      <p>
                        SCIENCE STREAM,58%.
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div
                    className="panel-heading cursor-pointer"
                    onClick={() => togglePanel("panel3")}
                    role="tab"
                  >
                    <h4 className="panel-title">
                      <span className="text-lg font-semibold">
                       KESHAV SMRUTI HIGH SCHOOL
                      </span>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${activePanel === "panel3" ? "block" : "hidden"}`}
                    role="tabpanel"
                  >
                    <div className="panel-body p-4">
                      <p>72% IN TENTH STD</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
    </section>
  );
};
