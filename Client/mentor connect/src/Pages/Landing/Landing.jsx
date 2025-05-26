import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiUsers, FiCode, FiCheckCircle } from 'react-icons/fi';

const Section = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      {children}
    </motion.div>
  );
};

const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-sans">
      {/* Hero Section */}
      <Section>
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">\            Collaborate, Code, Create <span className="text-cyan-400">Together</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Connect with like-minded developers to bring your ideas to life. Post your project ideas, find collaborators, and build amazing things together.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold">Start Collaborating</button>
            <button className="px-6 py-3 border border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900">How It Works</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <FeatureCard icon={<FiCode size={24} />} title="Share Your Ideas" text="Post your project ideas and let the community discover them." />
          <FeatureCard icon={<FiUsers size={24} />} title="Find Collaborators" text="Connect with developers who are passionate about your vision." />
          <FeatureCard icon={<FiCheckCircle size={24} />} title="Build Together" text="Use our collaboration tools to bring your projects to life." />
        </div>
      </Section>

      {/* Features Section */}
      <Section delay={0.2}>
        <h2 className="text-3xl font-bold text-center mb-10">Powerful Collaboration Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Project Showcase" text="Create detailed project profiles with descriptions, required skills, and goals." />
          <FeatureCard title="Real-time Communication" text="Chat, share feedback, and discuss ideas using our integrated messaging system." />
          <FeatureCard title="Project Management" text="Use our Kanban board and task tracking to stay organized and productive." />
          <FeatureCard title="Version Control" text="Integrate with GitHub, GitLab and manage your codebase easily." />
          <FeatureCard title="Contribution Tracking" text="Track contributions and ensure fair recognition for all team members." />
          <FeatureCard title="Skill Development" text="Work on diverse projects and grow your portfolio while learning new skills." />
        </div>
      </Section>

      {/* How It Works Section */}
      <Section delay={0.4}>
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <StepCard step="1" title="Share Your Idea" text="Post your project idea with goals, timeline, and required skills." />
          <StepCard step="2" title="Build Your Team" text="Connect with developers who are interested in your idea." />
          <StepCard step="3" title="Collaborate & Build" text="Coordinate tasks, share code, and track progress together." />
          <StepCard step="4" title="Launch Your Project" text="Take your idea from concept to production with your team." />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section delay={0.6}>
        <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            name="Alex Johnson"
            title="Full Stack Developer"
            quote="CodeCollab helped me connect with talented developers who shared my passion. We built EcoTrack together and launched it in just 3 months!"
          />
          <TestimonialCard
            name="Samantha Lee"
            title="Product Designer"
            quote="It’s amazing how quickly our team came together and created something impactful. Collaboration has never been this smooth."
          />
        </div>
      </Section>

      {/* Call to Action */}
      <Section delay={0.8}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building Together?</h2>
          <p className="mb-6">Join our community of passionate developers and turn your ideas into reality.</p>
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold">Create Your Account</button>
        </div>
      </Section>
    </div>
  );
};

const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-white/5 p-6 rounded-2xl shadow-lg text-left">
    {icon && <div className="text-cyan-400 mb-4">{icon}</div>}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

const StepCard = ({ step, title, text }) => (
  <div className="bg-white/5 p-6 rounded-2xl shadow-md">
    <div className="text-cyan-400 text-3xl font-bold mb-2">{step}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

const TestimonialCard = ({ name, title, quote }) => (
  <div className="bg-white/5 p-6 rounded-2xl shadow-md">
    <p className="italic text-gray-300 mb-4">“{quote}”</p>
    <div className="font-bold text-white">{name}</div>
    <div className="text-sm text-gray-400">{title}</div>
  </div>
);

export default Landing;
