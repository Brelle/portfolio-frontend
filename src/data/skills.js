import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython,
  FaReact, FaWordpress, FaGitAlt, FaGithub, FaBullhorn, FaSearch, FaHashtag
} from 'react-icons/fa';
import { SiDjango, SiMysql } from 'react-icons/si';

const skills = [
  // Développement
  { name: 'HTML5', icon: FaHtml5, level: 'Intermédiaire', category: 'Développement' },
  { name: 'CSS3', icon: FaCss3Alt, level: 'Intermédiaire', category: 'Développement' },
  { name: 'JavaScript', icon: FaJs, level: 'Intermédiaire', category: 'Développement' },
  { name: 'React', icon: FaReact, level: 'En apprentissage', category: 'Développement' },
  { name: 'PHP', icon: FaPhp, level: 'Débutant', category: 'Développement' },
  { name: 'Python', icon: FaPython, level: 'Intermédiaire', category: 'Développement' },
  { name: 'Django', icon: SiDjango, level: 'Débutant', category: 'Développement' },
  { name: 'MySQL', icon: SiMysql, level: 'Intermédiaire', category: 'Développement' },

  // Outils
  { name: 'WordPress', icon: FaWordpress, level: 'Intermédiaire', category: 'Outils' },
  { name: 'Git / GitHub', icon: FaGithub, level: 'Intermédiaire', category: 'Outils' },

  // Marketing digital
  { name: 'Marketing digital', icon: FaBullhorn, level: 'Intermédiaire', category: 'Marketing digital' },
  { name: 'SEO', icon: FaSearch, level: 'Débutant', category: 'Marketing digital' },
  { name: 'Réseaux sociaux', icon: FaHashtag, level: 'Intermédiaire', category: 'Marketing digital' },
];

export default skills;