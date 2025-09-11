import React from 'react';

export default function Hero({
  name = 'Tathagata Bhattacharjee',
  title = 'Full-stack Developer',
  tagline = 'I build performant and accessible web apps with React and Node.js.',
}) {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div className='shadow-md rounded-md p-6'>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Hi, I’m <span className="text-blue-600">{name}</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-600">
              <strong className="text-gray-800">{title}</strong> — {tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Available for freelance & full-time roles • Open to collaboration
            </div>
          </div>

          {/* Right: profile image */}
          <div className="flex justify-center rounded-full lg:justify-end">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center">
              {/* Replace /profile.jpg with your real image in frontend/public/ */}
              <img
                src="/profile.jpg"
                alt={`${name} — profile`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="100%" height="100%" fill="%23eaf2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="%23063b76">Upload profile.jpg</text></svg>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
