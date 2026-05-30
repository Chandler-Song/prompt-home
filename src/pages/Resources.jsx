import { useState, useEffect } from 'react';
import { BookOpen, Wrench, Sparkles, Library } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ResourceCard from '../components/ResourceCard';
import './Resources.css';

const iconMap = {
  BookOpen: BookOpen,
  Wrench: Wrench,
  Sparkles: Sparkles,
  Library: Library
};

function Resources() {
  const [data, setData] = useState({ categories: [] });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/prompt-home/data/resources.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('加载资源数据失败:', error));
  }, []);

  const filterResources = (resources) => {
    if (!searchTerm) return resources;
    
    const term = searchTerm.toLowerCase();
    return resources.filter(resource => 
      resource.name.toLowerCase().includes(term) ||
      resource.description.toLowerCase().includes(term) ||
      resource.tags.some(tag => tag.toLowerCase().includes(term))
    );
  };

  return (
    <div className="resources-page">
      <div className="page-header">
        <h1 className="page-title">提示词学习资源</h1>
        <p className="page-subtitle">
          精选优质的提示词学习教程、工具和资源
        </p>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="搜索资源名称、描述或标签..."
        />
      </div>

      <div className="resources-content">
        {data.categories.map((category) => {
          const filteredResources = filterResources(category.resources || []);
          
          if (searchTerm && filteredResources.length === 0) {
            return null;
          }

          const IconComponent = iconMap[category.icon] || BookOpen;

          return (
            <section key={category.id} className="resource-section">
              <div className="section-header">
                <IconComponent size={24} />
                <h2 className="section-title">{category.name}</h2>
                <span className="section-count">
                  {filteredResources.length} 个资源
                </span>
              </div>
              
              <div className="grid-resources">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </section>
          );
        })}

        {searchTerm && (
          <div className="no-results">
            <p>未找到匹配的资源</p>
            <p className="no-results-hint">尝试使用不同的关键词搜索</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
