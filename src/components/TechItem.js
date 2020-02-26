import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button
        onClick={onDelete}
        id="removeBtn"
        type="button"
        className="btn btn-danger">Remover</button>
    </li >
  );
}

export default TechItem;