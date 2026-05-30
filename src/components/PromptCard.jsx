import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import './PromptCard.css';

function PromptCard({ prompt }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="prompt-card">
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

      <div className="prompt-usage-section">
        <button
          className="usage-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          <span>使用说明</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expanded && (
          <div className="usage-content">
            <p>{prompt.usage}</p>
            <details className="prompt-details">
              <summary>查看完整提示词</summary>
              <pre className="prompt-content">{prompt.content}</pre>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}

export default PromptCard;
