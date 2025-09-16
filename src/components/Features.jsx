import React from "react";
import  features  from "../data/features";

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Creative IT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.id} className="flex flex-col items-center p-6 bg-slate-50 rounded-lg shadow">
              <img src={f.icon} alt={f.title} className="w-16 h-16 mb-4" />
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-slate-600 text-center">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
