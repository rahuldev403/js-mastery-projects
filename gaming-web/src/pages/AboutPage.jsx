const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-indigo-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
        About Our Gaming Universe
      </h1>
      <p className="max-w-4xl text-lg text-center mb-8 leading-relaxed text-purple-300">
        Welcome to the ultimate battleground where legends are born and
        champions rise. Our platform is dedicated to bringing gamers together
        from all corners of the world to compete, connect, and conquer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="bg-gradient-to-tr from-purple-800 to-indigo-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Competitive Tournaments</h2>
          <p>
            Join thrilling tournaments with real prizes and climb the
            leaderboards to prove your skills.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-purple-800 to-indigo-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Community & Collaboration</h2>
          <p>
            Connect with fellow gamers, form teams, and share strategies in our
            vibrant community.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-purple-800 to-indigo-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Pro-Level Coaching</h2>
          <p>
            Access expert coaching sessions to elevate your gameplay and
            dominate the competition.
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-4xl text-center">
        <h3 className="text-3xl font-extrabold mb-4">Our Mission</h3>
        <p className="text-purple-300 leading-relaxed">
          To empower gamers of all levels by providing a platform that fosters
          competition, growth, and camaraderie. We believe every player has the
          potential to become a legend.
        </p>
      </div>
      <div className="mt-16 w-full max-w-6xl flex justify-center">
        <img
          src="/images/gaming-community.jpg"
          alt="Gaming Community"
          className="rounded-xl shadow-2xl max-h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPage;
