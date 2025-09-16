import React from "react";
import  successStories  from "../data/successStories";

export default function SuccessStories() {
  return (
    <section id="success" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-slate-50 rounded-lg shadow p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src={story.image} alt={story.studentName} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold">{story.studentName}</h3>
                  <p className="text-xs text-slate-500">Course: {story.courseName}</p>
                </div>
              </div>
              <p className="text-slate-700 flex-1">"{story.storyText}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
