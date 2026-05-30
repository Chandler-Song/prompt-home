import { useState } from 'react';
import { Menu, X, BookOpen, Star } from 'lucide-react';
import './Header.css';

function Header({ activeTab, onTabChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">✨</div>
          <h1 className="logo-text">Prompt Home</h1>
        </div>

        {/* 桌面导航 */}
        <nav className="header-nav desktop-nav">
          <button
            className={`nav-button ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => onTabChange('resources')}
          >
            <BookOpen size={18} />
            <span>学习资源</span>
          </button>
          <button
            className={`nav-button ${activeTab === 'prompts' ? 'active' : ''}`}
            onClick={() => onTabChange('prompts')}
          >
            <Star size={18} />
            <span>提示词库</span>
          </button>
        </nav>

        {/* 移动端菜单按钮 */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 移动端导航菜单 */}
      {mobileMenuOpen && (
        <nav className="header-nav mobile-nav">
          <button
            className={`nav-button ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => {
              onTabChange('resources');
              setMobileMenuOpen(false);
            }}
          >
            <BookOpen size={18} />
            <span>学习资源</span>
          </button>
          <button
            className={`nav-button ${activeTab === 'prompts' ? 'active' : ''}`}
            onClick={() => {
              onTabChange('prompts');
              setMobileMenuOpen(false);
            }}
          >
            <Star size={18} />
            <span>提示词库</span>
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
