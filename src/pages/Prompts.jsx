import { useState, useEffect, useMemo } from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import TagFilter from '../components/TagFilter';
import PromptCard from '../components/PromptCard';
import './Prompts.css';

function Prompts() {
  const [data, setData] = useState({ prompts: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [layout, setLayout] = useState('compact');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

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

  // 分页计算
  const totalPages = Math.ceil(filteredPrompts.length / itemsPerPage);
  const paginatedPrompts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredPrompts.slice(start, end);
  }, [filteredPrompts, currentPage, itemsPerPage]);

  // 当筛选条件改变时重置页码
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTags, itemsPerPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="prompts-page">
      <div className="page-header">
        <div className="header-top">
          <div>
            <h1 className="page-title">提示词收藏库</h1>
            <p className="page-subtitle">
              精心整理的实用提示词集合,一键复制即可使用
            </p>
          </div>
          <div className="layout-toggle">
            <button 
              className={`layout-btn ${layout === 'compact' ? 'active' : ''}`}
              onClick={() => setLayout('compact')}
              title="紧凑布局"
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              className={`layout-btn ${layout === 'relaxed' ? 'active' : ''}`}
              onClick={() => setLayout('relaxed')}
              title="宽松布局"
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>
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
        <div className="items-per-page">
          <span>每页显示:</span>
          {[20, 50, 100].map(num => (
            <button
              key={num}
              className={`page-size-btn ${itemsPerPage === num ? 'active' : ''}`}
              onClick={() => setItemsPerPage(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="prompts-content">
        {paginatedPrompts.length > 0 ? (
          <div className={`grid-prompts ${layout}`}>
            {paginatedPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} layout={layout} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>未找到匹配的提示词</p>
            <p className="no-results-hint">尝试调整搜索条件或筛选标签</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="page-btn"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            首页
          </button>
          <button 
            className="page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            上一页
          </button>
          
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                if (totalPages <= 7) return true;
                if (page === 1 || page === totalPages) return true;
                if (Math.abs(page - currentPage) <= 1) return true;
                return false;
              })
              .map((page, index, array) => {
                const items = [];
                if (index > 0 && page - array[index - 1] > 1) {
                  items.push(<span key={`ellipsis-${page}`} className="ellipsis">...</span>);
                }
                items.push(
                  <button
                    key={page}
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
                return items;
              })}
          </div>

          <button 
            className="page-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            下一页
          </button>
          <button 
            className="page-btn"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            末页
          </button>
        </div>
      )}
    </div>
  );
}

export default Prompts;
