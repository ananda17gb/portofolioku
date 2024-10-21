import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function AboutMe() {
  return (
    <>
      <div id="aboutme" className="bg-[#212a3e] md:min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between md:px-80 items-center lg:py-80 py-40">
          <div className="md:w-[632px] w-svw px-4 flex flex-col gap-3 order-2 lg:order-1">
            <h1 className="text-[#f1f6f9] font-bold md:text-3xl text-2xl">
              <em>Ananda </em>
              Arti Widigdo
            </h1>
            <p className="text-[#9ba4b5] md:text-xl text-lg whitespace-break-spaces md:text-left text-justify">
              Hi there, I’m a guy from <strong>Indonesia</strong> who are
              interested in <strong>technology</strong>
              <strong>software development </strong>
              (web and mobile), <strong>UI/UX design</strong>, and
              <strong> game development</strong>.
            </p>
            <div>
              <ul className="flex gap-4 items-center">
                <li className="inline group">
                  <a
                    href="https://github.com/ananda17gb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out group-hover:text-[#f1f6f9] text-[#9ba4b5]"
                    />
                  </a>
                </li>
                <li className="inline group">
                  <a
                    href="https://www.linkedin.com/in/ananda-arti-widigdo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out group-hover:text-[#f1f6f9] text-[#9ba4b5]"
                    />
                  </a>
                </li>
                <li className="inline group">
                  <a
                    href="https://www.instagram.com/anandaaw17/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out group-hover:text-[#f1f6f9] text-[#9ba4b5]"
                    />
                  </a>
                </li>
                <li className="inline group">
                  <a
                    href="https://www.youtube.com/@anandaartiwidigdo2703"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out group-hover:text-[#f1f6f9] text-[#9ba4b5]"
                    />
                  </a>
                </li>
                <li className="inline group">
                  <a
                    href="https://wa.me/6281222693760"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size="2xl"
                      className="transition-transform hover:-translate-y-1 duration-100 ease-in-out group-hover:text-[#f1f6f9] text-[#9ba4b5]"
                    />
                  </a>
                </li>
                <li className="inline group">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    size="2xl"
                    className="transition-transform ease-in-out group-hover:text-[#f1f6f9] text-[#9ba4b5]"
                    title="NdaAW#4578"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-[360px] md:w-[600px] flex justify-center relative">
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#212a3e] to-transparent opacity-100"></div>
              <img
                src="/ananda.png"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
