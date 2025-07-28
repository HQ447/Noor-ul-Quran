import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white bg-black ">
      {/* Top Footer */}
      <div className="grid grid-cols-1 gap-8 px-4 py-12 md:px-12 md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {/* Logo + Description */}
        <div className="text-center md:text-left">
          <img
            src="https://elitequrantutors.com/wp-content/uploads/2025/07/01-01-2-1-300x300.webp"
            alt="EliteQuranTutors.com"
            className="object-contain w-32 h-32 mx-auto md:mx-0"
          />
          <p className="mt-4 text-sm text-gray-300">
            <strong>EliteQuranTutors.com</strong> offers personalized,
            one-on-one online Quran classes with certified male and female
            tutors. Learn Quran with Tajweed, Hifz, and Islamic studies — from
            the comfort of your home.
          </p>
        </div>

        {/* Popular Courses */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">POPULAR COURSES</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://elitequrantutors.com/courses/noorani-qaidah-online/"
                className="hover:underline"
              >
                Noorani Qaidah Course
              </a>
            </li>
            <li>
              <a
                href="https://elitequrantutors.com/courses/quran-reading-with-tajweed/"
                className="hover:underline"
              >
                Quran Reading Course
              </a>
            </li>
            <li>
              <a
                href="https://elitequrantutors.com/courses/tafseer-ul-quran-course/"
                className="hover:underline"
              >
                Tafseer ul Quran Course
              </a>
            </li>
            <li>
              <a
                href="https://elitequrantutors.com/courses/qruan-memorization-course/"
                className="hover:underline"
              >
                Quran Memorization Course
              </a>
            </li>
            <li>
              <a
                href="https://elitequrantutors.com/courses/curriculum-subjects-tution/"
                className="hover:underline"
              >
                Curriculum Subjects Tuition
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">NEED ANY HELP?</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://elitequrantutors.com/contact/#faq"
                className="hover:underline"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="https://elitequrantutors.com/contact/"
                className="hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="mb-4 text-lg font-semibold">FOLLOW US ON</h2>
          <div className="flex justify-center gap-4 text-xl">
            <a
              href="https://www.facebook.com/elitequrantutors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/adeelonlinequranacademy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@elitequrantutors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="py-4 text-sm text-center text-gray-400 bg-black">
        © 2025 EliteQuranTutors.com – Designed by{" "}
        <a
          href="https://www.facebook.com/m.tallha.ali"
          className="text-blue-400 hover:underline"
        >
          <a href="https://hamad-1.vercel.app/" target="_blank">
            Hammad Ahmad
          </a>
        </a>
      </div>
    </footer>
  );
}
