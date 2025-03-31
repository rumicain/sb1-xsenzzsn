import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Trophy, Wallet } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '$2.8B',
    label: 'Portfolio Value',
  },
  {
    icon: Trophy,
    value: '150+',
    label: 'Exclusive Properties',
  },
  {
    icon: Wallet,
    value: '$500M+',
    label: 'Annual Transactions',
  },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 bg-pure-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-playfair text-center mb-16"
          style={{
            background: 'linear-gradient(145deg, #FFFFFF 0%, #D3D3D3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Off-Market Excellence
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-8 monochrome-surface"
            >
              <stat.icon 
                className="w-12 h-12 mx-auto mb-6"
                style={{ color: '#B4934C' }}
              />
              <div className="stat-counter">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}