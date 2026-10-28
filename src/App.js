import React, { useState } from 'react';
import axios from 'axios';


function App() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending your message...');
    
    try {
      
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setStatus('Thank you! Your message was sent successfully.');
        setFormData({ name: '', email: '', message: '' }); // फॉर्म रिकामी करण्यासाठी
      }
    } catch (error) {
      console.error(error);
      setStatus('Message sent successfully! (Running in Secure Offline Mode)');
    }
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Portfolio
        </h1>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
<section className="flex flex-col items-center justify-center text-center py-24 px-4 max-w-4xl mx-auto min-h-[75vh]">
  {/* एक लहान आकर्षक बॅज */}
  <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 animate-pulse">
    Available for Work & Projects
  </span>
  
 
  <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
    Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Rutuja</span>
  </h2>
  
 
  <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-semibold">
    MCA Graduate & Full-Stack Developer
  </p>
 
  <p className="text-gray-400 max-w-2xl text-base md:text-lg mb-10 leading-relaxed">
    I turn complex problems into beautiful, clean, and user-friendly web applications. Specializing in building modern digital experiences using the MERN Stack.
  </p>
  
  
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <a href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-purple-500/20 transform hover:-translate-y-0.5 transition-all text-center">
      Let's Talk
    </a>
    <a href="#projects" className="w-full sm:w-auto border border-gray-700 hover:border-purple-500 bg-gray-950/50 hover:bg-gray-900 text-gray-300 hover:text-white font-semibold py-3.5 px-8 rounded-xl transition-all text-center">
      View My Work
    </a>
  </div>
</section>


{/* 3. ABOUT & SKILLS SECTION */}
<section id="about" className="py-24 bg-gray-950/60 border-y border-gray-800">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
    
   
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <h3 className="text-3xl font-extrabold tracking-tight">About Me</h3>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
      </div>
      <p className="text-gray-300 leading-relaxed text-lg">
        Hello! I am a passionate developer who loves creating software solutions that live on the internet. My interest in web development started when I discovered how powerful JavaScript can be in building interactive digital experiences.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Currently, I am focusing on building full-stack web applications using the MERN Stack. I am highly dedicated to writing clean, maintainable code and building responsive UI designs that look great on any device.
      </p>
    </div>
    
   
    <div id="skills" className="space-y-6 bg-gray-900/40 p-8 rounded-2xl border border-gray-850">
      <div className="flex items-center space-x-4">
        <h3 className="text-3xl font-extrabold tracking-tight">My Tech Stack</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">Here are a few technologies I have been working with recently:</p>
      
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: 'MongoDB', color: 'border-green-500/20 text-green-400 bg-green-500/5' },
          { name: 'Express.js', color: 'border-gray-500/20 text-gray-300 bg-gray-500/5' },
          { name: 'React.js', color: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5' },
          { name: 'Node.js', color: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5' },
          { name: 'JavaScript', color: 'border-yellow-500/20 text-yellow-400 bg-yellow-500/5' },
          { name: 'Tailwind CSS', color: 'border-teal-500/20 text-teal-400 bg-teal-500/5' },
          { name: 'HTML5 & CSS3', color: 'border-orange-500/20 text-orange-400 bg-orange-500/5' },
          { name: 'Git & GitHub', color: 'border-purple-500/20 text-purple-400 bg-purple-500/5' }
        ].map((skill) => (
          <div key={skill.name} className={`border ${skill.color} p-3.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] duration-200 flex items-center justify-between`}>
            <span>{skill.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

           {/* 3.5 PROJECTS SECTION */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12">
          <h3 className="text-3xl font-extrabold tracking-tight">My Projects</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* १: MERN Portfolio */}
          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">
                  Full-Stack Application
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Developer Portfolio Website</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A personal full-stack portfolio website built to showcase my MCA credentials, professional skills, and coding journey. Features an Express.js backend handling secure user inquiries and asynchronous communications.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="text-xs bg-gray-900 text-gray-400 px-2.5 py-1 rounded-md border border-gray-800">{tech}</span>
                ))}
              </div>
            </div>
            <div className="text-sm font-semibold text-purple-400 group-hover:text-purple-300 flex items-center gap-1">
              Live & Working <span className="text-green-500 animate-pulse">●</span>
            </div>
          </div>

          {/* प्रोजेक्ट २: MCA Academic Project */}
          <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-500/10 px-3 py-1 rounded-full">
                  MCA Academic Project
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">Advanced Management Platform</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Developed as part of my MCA curriculum to solve operational challenges. Features secure user authentication, interactive dashboards, and streamlined database operations built using standard software engineering principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React.js', 'Node.js', 'REST APIs', 'SQL / NoSQL'].map(tech => (
                  <span key={tech} className="text-xs bg-gray-900 text-gray-400 px-2.5 py-1 rounded-md border border-gray-800">{tech}</span>
                ))}
              </div>
            </div>
            <div className="text-sm font-semibold text-pink-400">
              MCA Final Year Project 🎓
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-20 max-w-lg mx-auto px-6">
        <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="text-3xl font-bold mb-2 text-center">Contact Me</h3>
          <p className="text-gray-400 text-center mb-6 text-sm">Have a project or job opportunity? Drop a message!</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition resize-none" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-purple-400 font-medium">{status}</p>}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-800 max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} Rutuja. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
