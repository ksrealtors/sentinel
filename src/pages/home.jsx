import React, { useEffect } from "react";
import landing from "../assets/landing.jpg";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import person from "../assets/person.png";
import { Input } from "@/components/ui/input";
import ExpandableCards from "@/components/ui/cards";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200); // allow render time
      }
    }
  }, [location]);

  useEffect(() => {
    // GSAP ScrollTrigger for hero section parallax
    const heroText = document.querySelector(".hero-text");
    const heroSearch = document.querySelector(".hero-search");

    gsap.to(heroText, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(heroSearch, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    gsap.to(cards, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      x: 0,
      opacity: 1,
      from: { x: 100, opacity: 0 },
    });
  }, []);

  const data = [
    {
      category: "Luxury Villa",
      title: "Sea Breeze Residency",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      content: <p>Infinity pool with ocean view.</p>,
    },
    {
      category: "Modern Apartment",
      title: "Urban Heights",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      content: <p>City-center modern 3BHK apartments.</p>,
    },
    {
      category: "Commercial Space",
      title: "Skyline Plaza",
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      content: <p>Flexible office spaces, 24/7 security.</p>,
    },
    {
      category: "Farmhouse",
      title: "Green Valley Estate",
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      content: <p>Private garden with solar energy.</p>,
    },
    {
      category: "Beachfront Property",
      title: "Azure Shore Haven",
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      content: <p>Beachfront living with sunrise views.</p>,
    },
    {
      category: "Mountain Retreat",
      title: "Highland Escape",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      content: <p>Eco-friendly mountain retreat getaway.</p>,
    },
    {
      category: "City Penthouse",
      title: "The Skyline Crown",
      src: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80",
      content: <p>Luxury penthouse with city view.</p>,
    },
    {
      category: "Countryside Cottage",
      title: "Willow Creek Cottage",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      content: <p>Rustic countryside cottage escape.</p>,
    },
  ];

  const services = [
    {
      title: "Buy & Sell Properties",
      description:
        "Find your dream home or sell your property with confidence through our expert guidance. We handle everything from high-quality listings, professional photography, and targeted marketing to negotiation and closing. Whether it’s a cozy apartment or a luxury villa, our goal is to ensure you get the best value and a seamless experience from start to finish.",
    },
    {
      title: "Rent & Lease Solutions",
      description:
        "Looking for tenants or your next rental home? Our team provides end-to-end rental management — from tenant verification and agreement documentation to rent collection and maintenance coordination. We make renting and leasing stress-free, ensuring both property owners and tenants enjoy a smooth, transparent, and trustworthy process.",
    },
    {
      title: "Property Valuation & Market Insights",
      description:
        "Make informed investment decisions with our precise property valuation reports and real-time market analytics. We evaluate market trends, neighborhood development, and future potential to help you buy or sell at the right price. Stay ahead with our expert insights tailored for both first-time buyers and seasoned investors.",
    },
    {
      title: "Legal & Documentation Assistance",
      description:
        "We simplify complex property transactions by managing all legal and documentation tasks on your behalf. From title verification and registration to agreement drafting and tax compliance, our legal experts ensure your deal is secure, transparent, and fully compliant with local regulations — giving you complete peace of mind.",
    },
  ];

  return (
    <>
      <div
        id="home"
        className="w-screen h-screen bg-cover justify-between flex flex-col items-center py-40 px-10 relative"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-transparent"></div>
        <div className="hero-text text-center relative z-10">
          <p className="text-white text-8xl tracking-widest font-serif">
            K S Realtors
          </p>
          <p className="text-2xl text-white font-serif tracking-widest mt-4">
            Where dreams meet reality;
          </p>
        </div>
        <div className="hero-search w-2/3 relative z-10 mt-16 backdrop-blur rounded-full">
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-base hover:text-black transition-colors duration-300">
            <CiSearch size={36} />
          </div>

          <Input
            placeholder="Search..."
            className="w-full bg-white rounded-full p-8 px-14 opacity-40 text-gray-600 !text-2xl font-medium"
          />
        </div>
      </div>

      <div
        id="featured"
        className="h-fit w-screen flex relative items-start py-6"
      >
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-orange-400/100 via-white/100 to-transparent"></div>
        <ExpandableCards />
      </div>

      <div
        id="services"
        className="h-fit w-screen p-4 bg-gradient-to-b from-orange-400 to-lime-500 "
      >
        <p className="w-1/3 border-l font-serif border-b rounded-tl-2xl p-2 border-white font-medium text-3xl text-white tracking-wide">
          What we offer
        </p>
        <div className="flex flex-col py-10 px-4 gap-10 w-full">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`service-card flex ${
                idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } p-8 rounded-full items-center bg-gradient-to-r from-white/30 to-transparent`}
              style={{
                opacity: 0,
                transform: `translateX(${idx % 2 === 0 ? "100px" : "-100px"})`,
                backgroundImage:
                  idx % 2 === 0
                    ? "linear-gradient(to left, rgba(255,255,255,0.3), transparent)"
                    : "linear-gradient(to right, rgba(255,255,255,0.3), transparent)",
              }}
            >
              <div className="h-1/2">
                <img
                  src={data[0].src}
                  className="bg-cover bg-no-repeat rounded-full"
                />
              </div>
              <div className="w-full flex flex-col gap-6 p-6 text-white font-sans font-medium">
                <p className="text-3xl font-semibol">{item.title}</p>
                <p className="text-xl font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About me */}
      <div
        id="about"
        className="h-screen w-screen bg-gradient-to-b from-lime-500 via-white to-orange-100 p-20 flex items-center justify-center"
      >
        <motion.div className="w-full h-[30rem] flex items-center justify-between rounded-3xl backdrop-blur-md bg-white/30 shadow-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 p-12 flex flex-col justify-center text-gray-800 space-y-6"
          >
            <p className="text-5xl font-serif font-semibold text-orange-500">
              About Me
            </p>
            <p className="text-sm leading-relaxed font-light">
              Gorakh Baviskar is a dedicated real estate consultant and the
              founder of{" "}
              <span className="font-semibold text-orange-500">KS Realtors</span>
              . With years of experience assisting families, investors, and
              businesses in finding the right properties, his mission is to turn
              real estate dreams into lasting realities. Whether it involves
              luxury homes, investment opportunities, or commercial spaces,
              every deal is approached with transparency, trust, and personal
              attention. With over 25 years in the real estate and marketing
              industry, Gorakh has built a strong career specializing in sales
              strategy, client relations, and business development. Since
              beginning his journey in 1996, he has successfully managed and led
              sales teams, designed impactful marketing campaigns, and nurtured
              lasting customer relationships across diverse projects. As a
              forward-thinking leader, Gorakh takes pride in combining strategic
              vision with hands-on execution to drive growth, exceed targets,
              and deliver exceptional client satisfaction.
            </p>
            <p className="text-lg italic text-gray-700">
              “Real estate isn’t just about property — it’s about people,
              purpose, and passion.”
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 p-12 flex flex-col justify-center text-gray-800 space-y-6"
          >
            <img
              src={person}
              alt="Realtor"
              className="h-full w-full object-contain scale-x-[-1]"
            />
          </motion.div>
          {/* 
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8}}
            className="w-1/2 bg-red-400 h-full flex justify-center items-center"
          >
            a
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src={person}
                alt="Realtor"
                className="h-80 w-full object-fill scale-x-[-1]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 w-60 mx-auto bg-gradient-to-b from-transparent via-white/10 to-orange-50"></div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </>
  );
}

export default Home;
