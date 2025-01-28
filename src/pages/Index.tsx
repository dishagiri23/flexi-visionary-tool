import React, { useState } from 'react';
import FlexContainer from '@/components/FlexContainer';
import FlexControls from '@/components/FlexControls';
import CodePreview from '@/components/CodePreview';

const Index = () => {
  const [flexProperties, setFlexProperties] = useState({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    gap: '0',
  });
  const [itemCount, setItemCount] = useState(3);

  console.log('Rendering Index with flexProperties:', flexProperties);

  const handlePropertyChange = (property: string, value: string) => {
    console.log('Property change:', property, value);
    setFlexProperties((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  return (
    <div className="min-h-screen p-8 space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-light mb-2">Flexbox Visualizer</h1>
        <p className="text-foreground/80">Interactive tool to understand CSS Flexbox layout</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FlexContainer {...flexProperties} itemCount={itemCount} />
        </div>
        <div className="space-y-8">
          <FlexControls
            onPropertyChange={handlePropertyChange}
            onItemCountChange={setItemCount}
            itemCount={itemCount}
          />
          <CodePreview flexProperties={flexProperties} />
        </div>
      </div>
    </div>
  );
};

export default Index;