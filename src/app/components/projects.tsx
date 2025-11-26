"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import wdano from "../../../public/images/wdano.png";
import inventory from "../../../public/images/inventory.png";
import kpa from "../../../public/images/kpa.png";
import ad from "../../../public/images/ad.png";
import pha from "../../../public/images/pha1.jpg";
import docdeliver from "../../../public/images/docdeliver.png";
import chatbot from "../../../public/images/medicalchatbot.png";
import otos from "../../../public/images/otoshealth.png";
import ibudget from "../../../public/images/ibudget.png";
import mydental from "../../../public/images/mydentaldocs.png";
import aqprime from "../../../public/images/aqprime.png";
import InnerImageZoom from "react-inner-image-zoom";

export default function ProjectsComponent() {
  return (
    <section id="projects" className="bg-black font-sans p-10 w-auto">
      <h3 className="text-center text-3xl text-white">Projects.</h3>
      <p className="text-center text-2sm text-white pt-5 font-normal">
        I love to create things, and I'm always working on something new!
      </p>
      <p className="text-center text-2sm text-white font-normal">
        Here are some of my latest projects.
      </p>
      <div className="project-list">
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={wdano}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: NextJS/React/Tailwind/Cloudflare Worker
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Personal Portfolio
          </p>
          <p className="text-center text-[14px] text-white font-normal underline cursor-pointer">
            wdano.dev
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={inventory}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: PHP/MVC/Bootstrap/MySQL/jQuery
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Inventory with point of sale system
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={aqprime}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: Flutter/Dart/MySQL
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Mobile App like Netflix
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={kpa}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: Wordpress/Custom Theme/Custom Post Types/Custom
            Plugins/Woocommerce/PHP/MySQL/Bootstrap
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Wordpress Site with Custom Theme that supports Custom Post Types.
            Modified Woocommerce and plugins to support software subscription.
          </p>
          <a
            href="https://kpa.io/"
            target="_blank"
            className="text-center text-[14px] text-white font-normal underline cursor-pointer"
          >
            https://kpa.io/
          </a>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={ad}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: Wordpress/Custom Theme/Custom Post Types/Custom
            Plugins/Woocommerce/PHP/MySQL/Bootstrap
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Another Wordpress Site with Custom Theme that supports Custom Post
            Types. Modified Woocommerce and plugins to support purchase of
            custom furnitures.
          </p>
          <a
            href="https://advancedisplays.com/"
            target="_blank"
            className="text-center text-[14px] text-white font-normal underline cursor-pointer"
          >
            https://advancedisplays.com/
          </a>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={pha}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: ReactJS/Expo
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Appointment, Doctor's Messages and Chat app for a hospital
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={docdeliver}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: C#/Razor/AWS/Docker/Lambda
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Doctor's application to review patient's data and refer to other
            practitioner
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={chatbot}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: React/OpenAI
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Consultation Chatbot that will refer the patient to a specialized
            practitioner
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={otos}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: Python/SST/ReactJS
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Doctor's App that handles the initial consultation using online
            forms
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={ibudget}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: HTML5/Vanilla Javascript/Android
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Simple budget tracking tool
          </p>
          <p>
            <a
              href="https://ibudget.wdano.dev"
              target="_blank"
              className="text-center text-[14px] text-white font-normal underline cursor-pointer"
            >
              https://ibudget.wdano.dev
            </a>
          </p>
          <p>
            <a
              href="https://github.com/ax-webwarren/iBudget/blob/master/iBudget-debug.apk"
              target="_blank"
              className="text-center text-[14px] text-white font-normal underline cursor-pointer"
            >
              APK
            </a>
          </p>
        </article>
        <article className="text-center p-5">
          <Image
            className="mx-auto"
            src={mydental}
            width={250}
            height={250}
            alt="wdano.dev"
          />
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Tech stack: Django/Python/MySQL
          </p>
          <p className="text-center text-[14px] text-white p-5 pb-0 font-normal">
            Dental Appointment Application
          </p>
          <p>
            <a
              href="https://www.mydentaldocs.com/"
              target="_blank"
              className="text-center text-[14px] text-white font-normal underline cursor-pointer"
            >
              https://www.mydentaldocs.com/
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}
