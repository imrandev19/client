import React from "react";

const categories = [
  "Graphic & Multimedia",
  "Web & Software",
  "Digital Marketing",
  "3D Animation",
  "Cloud Computing",
  "Cybersecurity",
];

export default function Categories() {
  return (
    <section className="py-12 z-999 mt-50 ">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <div key={c} className="bg-white shadow rounded p-4 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm font-medium">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
