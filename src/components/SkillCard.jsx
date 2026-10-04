import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

function SkillCard({ skill }) {
  const Icon = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode;

  return (
    <div className="skill-card">
      <div className="skill-icon"><Icon /></div>
      <h3 className="skill-name">{skill.name}</h3>
      <span className="skill-level">{skill.level}</span>
    </div>
  );
}

export default SkillCard;