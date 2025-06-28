import React, { useState } from 'react';

export default function ComponentGenerator({ project }) {
  const [componentName, setComponentName] = useState('');
  const [prompt, setPrompt] = useState('');

  const submit = async e => {
    e.preventDefault();
    if (!componentName) return;
    await fetch(`/api/projects/${project}/components`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ componentName, prompt })
    });
    setComponentName('');
    setPrompt('');
    alert('Component placeholder created');
  };

  return (
    <form onSubmit={submit} style={{ marginTop: 20 }}>
      <h2>Generate Component with AI</h2>
      <input value={componentName} onChange={e => setComponentName(e.target.value)} placeholder="Component Name" />
      <input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Prompt" />
      <button type="submit">Generate</button>
    </form>
  );
}
