import React from "react";

export default function FooterExtended() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg">About Creative IT</h4>
          <p className="mt-4 text-sm text-slate-300">
            Leading IT training institute in Bangladesh offering certificates, career support and freelancer training.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Success Stories</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="mt-4 text-sm text-slate-300">Momtaz Plaza (4th Floor), Road #4, Dhanmondi, Dhaka</p>
          <p className="mt-2 text-sm">Phone: +8801777308777</p>
          <p className="text-sm">Email: info@creativeitinstitute.com</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Creative IT Institute. All rights reserved.
      </div>
    </footer>
  );
}
