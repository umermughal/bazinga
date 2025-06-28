import React, { useState, useEffect } from 'react';
import ProjectForm from './components/ProjectForm';
import DesignSystemForm from './components/DesignSystemForm';
import ComponentGenerator from './components/ComponentGenerator';

export default function App() {
  const [projects, setProjects] = useState({});
  const [selected, setSelected] = useState('');

  const load = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (name, framework) => {
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, framework })
    });
    await load();
  };

  const projectNames = Object.keys(projects);

  return (
    <div style={{ padding: 20 }}>
      <h1>Design System Generator</h1>
      <ProjectForm onCreate={handleCreate} />
      <div>
        <h2>Select Project</h2>
        <select onChange={e => setSelected(e.target.value)} value={selected}>
          <option value="">--select--</option>
          {projectNames.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      {selected && (
        <>
          <DesignSystemForm project={selected} />
          <ComponentGenerator project={selected} />
        </>
      )}
    </div>
  );
}
