import React, { useState } from "react";

export default function LanguageSwitch() {
  const [lang, setLang] = useState("BN");

  return (
    <div className="flex items-center bg-white rounded-full p-1 w-[80px] justify-between">
      <button
        onClick={() => setLang("BN")}
        className={`flex-1 text-sm font-bold py-1 rounded-full transition-colors duration-200 ${
          lang === "BN" ? "bg-red-600 text-white" : "text-red-400"
        }`}
      >
        BN
      </button>
      <button
        onClick={() => setLang("EN")}
        className={`flex-1 text-sm font-bold py-1 rounded-full transition-colors duration-200 ${
          lang === "EN" ? "bg-red-600 text-white" : "text-red-400"
        }`}
      >
        EN
      </button>
    </div>
  );
}