import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import PromptModal from './PromptModal';
import './PromptCard.css';

function PromptCard({ prompt, layout = 'compact' }) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div 
        className={`prompt-card ${layout === 'compact' ? 'compact' : 'relaxed'}`}
        onClick={handleCardClick}
      >
        <div className="prompt-header">
          <div className="prompt-title-section">
            <h3 className="prompt-title">{prompt.title}</h3>
            <span className="prompt-category">{prompt.category}</span>
          </div>
          <button
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            title="复制提示词"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? '已复制' : '复制'}</span>
          </button>
        </div>

        <p className="prompt-description">{prompt.description}</p>

        <div className="prompt-tags">
          {prompt.tags.map((tag, index) => (
            <span key={index} className="prompt-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {showModal && (
        <PromptModal 
          prompt={prompt} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
}

export default PromptCard;
