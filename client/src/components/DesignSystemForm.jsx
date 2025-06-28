import React, { useState } from 'react';

export default function DesignSystemForm({ project }) {
  const [primary, setPrimary] = useState('#ff0000');
  const [secondary, setSecondary] = useState('#00ff00');
  const [font, setFont] = useState('sans-serif');
  const [spacing, setSpacing] = useState(8);

  const submit = async e => {
    e.preventDefault();
    await fetch(`/api/projects/${project}/design-system`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ primary, secondary, font, spacing })
    });
    alert('Design system saved');
  };

  return (
    <form onSubmit={submit} style={{ marginTop: 20 }}>
      <h2>Design System</h2>
      <div>
        <label>Primary Color</label>
        <input value={primary} onChange={e => setPrimary(e.target.value)} />
      </div>
      <div>
        <label>Secondary Color</label>
        <input value={secondary} onChange={e => setSecondary(e.target.value)} />
      </div>
      <div>
        <label>Font</label>
        <input value={font} onChange={e => setFont(e.target.value)} />
      </div>
      <div>
        <label>Spacing</label>
        <input type="number" value={spacing} onChange={e => setSpacing(Number(e.target.value))} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
