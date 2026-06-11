// src/components/UnlistedCard.jsx

import { motion } from "framer-motion";
import { useState } from "react";

const LetterAvatar = ({ name }) => (
  <div
    className="
      w-8 h-8
      rounded-md
      bg-slate-100
      flex items-center justify-center
      text-xs
      font-bold
      text-slate-700
    "
  >
    {name?.charAt(0)?.toUpperCase() || "U"}
  </div>
);

const getShortName = (name = "") => {
  const words = name.split(" ");

  if (words.length >= 2) {
    return `${words[0]} ${words[1]}`;
  }

  return name;
};

const UnlistedCard = ({ stock }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        px-4
        py-3
        hover:border-green-200
        hover:shadow-md
        transition-all
        h-[115px]
      "
    >
      <div className="flex flex-col items-start h-full">

        {/* LOGO */}
        <div className="h-8 flex items-center">
          {!imgError && stock.logo ? (
            <img
              src={stock.logo}
              alt={stock.name}
              onError={() => setImgError(true)}
              className="
                h-6
                max-w-[80px]
                object-contain
                object-left
              "
            />
          ) : (
            <LetterAvatar name={stock.name} />
          )}
        </div>

        {/* COMPANY NAME */}
        <h3
          className="
            mt-2
            text-[12px]
            font-semibold
            text-slate-900
            leading-tight
            line-clamp-1
            text-left
            w-full
          "
        >
          {getShortName(stock.name)}
        </h3>

        {/* PRICE */}
        <p
          className="
            mt-1
            text-sm
            font-bold
            text-slate-700
          "
        >
          ₹{stock.price || "—"}
        </p>

        {/* LABEL */}
        <p
          className="
            text-[10px]
            text-slate-400
            leading-none
          "
        >
          Per Share
        </p>

      </div>
    </motion.div>
  );
};

export default UnlistedCard;