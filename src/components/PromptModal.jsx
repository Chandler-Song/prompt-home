import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import './PromptModal.css';

const PromptModal = ({ prompt, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{prompt.title}</h2>
            <span className="modal-category">{prompt.category}</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">{prompt.description}</p>

          <div className="modal-tags">
            {prompt.tags.map((tag, index) => (
              <span key={index} className="modal-tag">{tag}</span>
            ))}
          </div>

          <div className="prompt-content-section">
            <div className="content-header">
              <h3>提示词内容</h3>
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>复制</span>
                  </>
                )}
              </button>
            </div>
            <pre className="prompt-content">
              <code>{prompt.content}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;
