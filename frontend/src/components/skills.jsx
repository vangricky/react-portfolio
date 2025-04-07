import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 51 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'Git & GitHub', level: 88 },
  { name: 'PostgreSQL', level: 60 },
];

const Circle = ({ size, strokeWidth, percentage, label, animate }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    if (animate) {
      let start = 0;
      const duration = 1000;
      const increment = 10;

      const step = () => {
        start += increment;
        if (start <= percentage) {
          setAnimatedPercent(start);
          requestAnimationFrame(step);
        } else {
          setAnimatedPercent(percentage);
        }
      };
      step();
    }
  }, [animate, percentage]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <svg width={size} height={size} className="transform ">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fb923c"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={animate ? offset : circumference}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fb923c"
          className="text-xl font-semibold"
        >
          {animatedPercent}%
        </text>
      </svg>
      <p className="text-white font-medium text-center">{label}</p>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gray-700 py-20" id="skills" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-8xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {skills.map((skill, i) => (
            <Circle
              key={i}
              size={120}
              strokeWidth={10}
              percentage={skill.level}
              label={skill.name}
              animate={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
