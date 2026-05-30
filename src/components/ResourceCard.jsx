import { ExternalLink } from 'lucide-react';
import './ResourceCard.css';

function ResourceCard({ resource, layout = 'compact' }) {
  const { name, description, url, tags } = resource;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`resource-card ${layout}`}
    >
      <div className="resource-content">
        <h3 className="resource-title">{name}</h3>
        <p className="resource-description">{description}</p>
        <div className="resource-tags">
          {tags.map((tag, index) => (
            <span key={index} className="resource-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="resource-link-icon">
        <ExternalLink size={16} />
      </div>
    </a>
  );
}

export default ResourceCard;
