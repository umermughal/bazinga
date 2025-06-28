import React, { useState } from 'react';

export default function ProjectForm({ onCreate }) {
  const [name, setName] = useState('');
  const [framework, setFramework] = useState('react');

  const submit = e => {
    e.preventDefault();
    if (!name) return;
    onCreate(name, framework);
    setName('');
  };

  return (
    <form onSubmit={submit}>
      <h2>Create Project</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <select value={framework} onChange={e => setFramework(e.target.value)}>
        <option value="react">React</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
}
