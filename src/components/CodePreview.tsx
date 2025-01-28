import React from 'react';

interface CodePreviewProps {
  flexProperties: {
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    flexWrap: string;
    gap: string;
  };
}

const CodePreview: React.FC<CodePreviewProps> = ({ flexProperties }) => {
  console.log('Rendering CodePreview with properties:', flexProperties);

  const code = `.container {
  display: flex;
  flex-direction: ${flexProperties.flexDirection};
  justify-content: ${flexProperties.justifyContent};
  align-items: ${flexProperties.alignItems};
  flex-wrap: ${flexProperties.flexWrap};
  gap: ${flexProperties.gap};
}`;

  return (
    <div className="glass-panel rounded-lg p-6">
      <h3 className="text-lg font-semibold text-purple-light mb-4">CSS Code</h3>
      <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm text-foreground/90">{code}</code>
      </pre>
    </div>
  );
};

export default CodePreview;