import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">✨</span>
            <span className="footer-title">Prompt Home</span>
          </div>
          <p className="footer-description">
            您的提示词学习与收藏中心
          </p>
          <a
            href="https://github.com/Chandler-Song/prompt-home"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.958 1.207.82-.214 1.702-.321 2.584-.321.882 0 1.764.107 2.584.321 1.95-1.529 2.958-1.207 2.958-1.207.652 1.652.241 2.872.117 3.176.769.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>在 GitHub 上查看</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Prompt Home. Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
