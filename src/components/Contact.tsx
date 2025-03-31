import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-playfair mb-4"
            style={{
              background: 'linear-gradient(145deg, #FFFFFF 0%, #D3D3D3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Exclusive Access
          </h2>
          <p className="text-ash">
            Connect with our private network of ultra-high-net-worth investors
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="bg-pure-black/50 border border-ash/30 p-4
                       focus:border-accent focus:outline-none transition-colors
                       monochrome-surface"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-pure-black/50 border border-ash/30 p-4
                       focus:border-accent focus:outline-none transition-colors
                       monochrome-surface"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-pure-black/50 border border-ash/30 p-4
                     focus:border-accent focus:outline-none transition-colors
                     monochrome-surface"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-pure-black/50 border border-ash/30 p-4
                     focus:border-accent focus:outline-none transition-colors
                     monochrome-surface"
          />
          <button type="submit" className="btn-primary w-full">
            Request Private Access
          </button>
        </motion.form>
      </div>
    </section>
  );
}