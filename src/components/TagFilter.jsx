import './TagFilter.css';

function TagFilter({ tags, selectedTags, onToggle }) {
  if (tags.length === 0) return null;

  return (
    <div className="tag-filter">
      <div className="tag-list">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              className={`tag-button ${isSelected ? 'active' : ''}`}
              onClick={() => onToggle(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
      {selectedTags.length > 0 && (
        <button
          className="clear-tags"
          onClick={() => onToggle('clear')}
        >
          清除筛选
        </button>
      )}
    </div>
  );
}

export default TagFilter;
