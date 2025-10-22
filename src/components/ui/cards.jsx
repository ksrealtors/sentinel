"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}

export default function ExpandableCards() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div initial={{ opacity: 1 }} className="relative">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col flex-1 overflow-scroll">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-2xl text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="py-2 px-5 rounded-full font-bold tracking-widest bg-orange-400 text-white whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="px-4 pb-4 flex-1 overflow-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-full overflow-y-auto pr-2 dark:text-neutral-400"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "#fb923c #f3f4f6",
                    }}
                  >
                    <div className="h-40 overflow-y-auto pr-2">
                      {active.content &&
                        (active.content.props.children.length > 300
                          ? `${active.content.props.children.slice(0, 300)}...`
                          : active.content)}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <p className="text-3xl w-1/3 p-2 m-4 font-serif justify-center border-l border-b rounded-tl-2xl border-orange-400 tracking-wide font-medium text-orange-400">
        Featured Properties
      </p>
      <ul className="mx-auto p-2 w-screen flex justify-between items-start gap-5">
        {cards.map((card, idx) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="relative p-0 flex flex-col rounded-xl cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-200 dark:hover:bg-neutral-800"
          >
            <motion.div
              layoutId={`image-${card.title}-${id}`}
              className="relative"
            >
              <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 via-black/50 to-transparent p-2 flex flex-col">
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white text-sm"
                >
                  {card.description}
                </motion.p>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-lg"
                >
                  {card.title}
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Luxury Villa",
    title: "Sea Breeze Residency",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ctaText: "Visit",
    ctaLink: "#",
    content: (
      <p>
        Sea Breeze Residency is a stunning luxury villa offering an infinity
        pool with a breathtaking ocean view. Designed with elegance and comfort
        in mind, each villa features spacious living areas, modern interiors,
        and high-end amenities.
      </p>
    ),
  },
  {
    description: "Modern Apartment",
    title: "Urban Heights",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    ctaText: "Visit",
    ctaLink: "#",
    content: (
      <p>
        Urban Heights offers state-of-the-art modern apartments located in the
        heart of the city. These 3BHK residences are designed for contemporary
        urban living, combining style, functionality, and convenience.
      </p>
    ),
  },
  {
    description: "Commercial Space",
    title: "Skyline Plaza",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    ctaText: "Visit",
    ctaLink: "#",
    content: (
      <p>
        Skyline Plaza is a premium commercial space offering flexible office
        layouts with modern amenities and 24/7 security.
      </p>
    ),
  },
  {
    description: "Farmhouse",
    title: "Green Valley Estate",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    ctaText: "Visit",
    ctaLink: "#",
    content: (
      <p>
        Green Valley Estate is a serene farmhouse surrounded by lush greenery
        and private gardens. This eco-friendly property incorporates sustainable
        features such as solar energy and rainwater harvesting.
      </p>
    ),
  },
];
