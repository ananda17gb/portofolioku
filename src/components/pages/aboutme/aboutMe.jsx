import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faSoundcloud,
  faSpotify,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <>
      <div id="aboutme" className="bg-[#3C3836] md:min-h-screen">
        <div className="flex flex-col lg:flex-row justify-around px-40 items-center lg:py-80 py-40 gap-10">
          <div className="md:w-[632px] w-svw px-4 flex flex-col gap-3 order-2 lg:order-1">
            <h1 className="text-[#FBF1C7] font-bold md:text-3xl text-2xl">
              <em>Ananda </em>
              Arti Widigdo
            </h1>
            <p className="text-[#EBDBB2] md:text-xl text-lg whitespace-break-spaces md:text-left text-justify">
              Hi there, I’m a guy from <strong>Indonesia</strong> who are
              interested in <strong>technology</strong>,{" "}
              <strong>software development </strong>
              (web and mobile), <strong>UI/UX design</strong>, and
              <strong> game development</strong>.
            </p>
            <div>
              <ul className="flex gap-4 items-center">
                {/* Social Media Icons */}
                <li className="inline">
                  <a href="https://github.com/ananda17gb" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#d5c4a1" }}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.linkedin.com/in/ananda-arti-widigdo/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "#d5c4a1" }}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.instagram.com/anandaaw17/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#d5c4a1" }}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.youtube.com/@anandaartiwidigdo2703"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ color: "#d5c4a1" }}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a href="https://wa.me/6281222693760" target="_blank">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ color: "#d5c4a1" }}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out"
                    />
                  </a>
                </li>
                <li className="inline">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    style={{ color: "#d5c4a1" }}
                    size="2xl"
                    title="NdaAW#4578"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-[360px] md:w-[600px] flex justify-center">
              <img src="/ananda.png" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
