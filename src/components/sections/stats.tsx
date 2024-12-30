"use client";
import React from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatItemProps {
  number: number;
  label: string;
  symbol: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, symbol }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });
  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400">
        {inView ? (
          <CountUp start={0} end={number} duration={3} separator="," />
        ) : (
          0
        )}
        <span>{symbol}</span>
      </div>
      <div className="text-sm md:text-base text-gray-400">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto px-4 mt-12">
      <StatItem number={200} symbol="+" label="Successful Projects Delivered" />
      <StatItem number={50} symbol="+" label="Global Clients Served" />
      <StatItem number={99} symbol="%" label="Client Satisfaction Rate" />
      <StatItem number={150} symbol="+" label="Experienced Developers" />
    </div>
  );
};

export default Stats;
