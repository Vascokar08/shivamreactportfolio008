import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
  {`Hi! I'm Shivam Korgaonkar`}{" "}
  <div className="txt-rotate-container">
    <span
      className="txt-rotate"
      dataPeriod="1000"
      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
    >
      <span className="wrap">{text}</span>
    </span>
  </div>
</h1>

                  <p>
                    As a Front-End Developer, I specialize in building
                    interactive and responsive website elements using HTML, CSS,
                    and JavaScript to ensure a seamless user experience across
                    all devices. With a background in Web Design, I focus on
                    crafting visually engaging layouts and graphics that align
                    with the brand's identity. Additionally, as a UI/UX
                    Designer, I conduct user research, create wireframes, and
                    design intuitive navigation to enhance usability. My goal is
                    to create websites that are not only functional and
                    user-friendly but also visually appealing and aligned with
                    the user’s needs.
                  </p>
                  <div className="mt-6 md:mt-0 md:ml-0 w-full md:w-25 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <a
                      href="/resume.pdf"
                      download
                      title="Download CV"
                      className="inline-block px-2 py-3 text-lg font-semibold text-white bg-primary-color rounded-xl transition hover:shadow-lg hover:opacity-90"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" className="mt-4" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
