import { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import TagFilter from '../components/TagFilter';
import PromptCard from '../components/PromptCard';
import './Prompts.css';

function Prompts() {
  const [data, setData] = useState({ prompts: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetch('/prompt-home/data/prompts.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('加载提示词数据失败:', error));
  }, []);

  // 提取所有唯一标签
  const allTags = useMemo(() => {
    const tags = new Set();
    data.prompts.forEach(prompt => {
      prompt.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [data.prompts]);

  // 筛选提示词
  const filteredPrompts = useMemo(() => {
    return data.prompts.filter(prompt => {
      // 搜索筛选
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const matchSearch = 
          prompt.title.toLowerCase().includes(term) ||
          prompt.description.toLowerCase().includes(term) ||
          prompt.tags.some(tag => tag.toLowerCase().includes(term)) ||
          prompt.category.toLowerCase().includes(term);
        
        if (!matchSearch) return false;
      }

      // 标签筛选
      if (selectedTags.length > 0) {
        const hasMatchingTag = prompt.tags.some(tag => 
          selectedTags.includes(tag)
        );
        if (!hasMatchingTag) return false;
      }

      return true;
    });
  }, [data.prompts, searchTerm, selectedTags]);

  const handleTagToggle = (tag) => {
    if (tag === 'clear') {
      setSelectedTags([]);
    } else {
      setSelectedTags(prev => 
        prev.includes(tag)
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
    }
  };

  return (
    <div className="prompts-page">
      <div className="page-header">
        <h1 className="page-title">提示词收藏库</h1>
        <p className="page-subtitle">
          精心整理的实用提示词集合,一键复制即可使用
        </p>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="搜索提示词标题、描述或标签..."
        />
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onToggle={handleTagToggle}
        />
      </div>

      <div className="prompts-stats">
        <span className="stats-text">
          共 {filteredPrompts.length} 个提示词
        </span>
        {(searchTerm || selectedTags.length > 0) && (
          <span className="stats-filter-hint">
            (已筛选)
          </span>
        )}
      </div>

      <div className="prompts-content">
        {filteredPrompts.length > 0 ? (
          <div className="grid-prompts">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>未找到匹配的提示词</p>
            <p className="no-results-hint">尝试调整搜索条件或筛选标签</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Prompts;
