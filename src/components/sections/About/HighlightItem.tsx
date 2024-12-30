import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HighlightItemProps {
  text: string;
  index: number;
}

export function HighlightItem({ text, index }: HighlightItemProps) {
  return (
    <motion.div 
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}