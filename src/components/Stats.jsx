import React from "react";
import  stats  from "../data/stats";

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2 uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
