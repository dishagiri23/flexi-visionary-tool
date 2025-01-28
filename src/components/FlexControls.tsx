import React from 'react';
import { Select } from '@/components/ui/select';

interface FlexControlsProps {
  onPropertyChange: (property: string, value: string) => void;
  onItemCountChange: (count: number) => void;
  itemCount: number;
}

const FlexControls: React.FC<FlexControlsProps> = ({
  onPropertyChange,
  onItemCountChange,
  itemCount,
}) => {
  console.log('Rendering FlexControls');

  return (
    <div className="glass-panel rounded-lg p-6 space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-light">Container Properties</h3>
        
        <div className="space-y-2">
          <label className="text-sm text-foreground/80">flex-direction</label>
          <select
            className="w-full bg-secondary rounded-md px-3 py-2 text-sm"
            onChange={(e) => onPropertyChange('flexDirection', e.target.value)}
          >
            <option value="row">row</option>
            <option value="column">column</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/80">justify-content</label>
          <select
            className="w-full bg-secondary rounded-md px-3 py-2 text-sm"
            onChange={(e) => onPropertyChange('justifyContent', e.target.value)}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/80">align-items</label>
          <select
            className="w-full bg-secondary rounded-md px-3 py-2 text-sm"
            onChange={(e) => onPropertyChange('alignItems', e.target.value)}
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/80">flex-wrap</label>
          <select
            className="w-full bg-secondary rounded-md px-3 py-2 text-sm"
            onChange={(e) => onPropertyChange('flexWrap', e.target.value)}
          >
            <option value="nowrap">nowrap</option>
            <option value="wrap">wrap</option>
            <option value="wrap-reverse">wrap-reverse</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/80">gap</label>
          <select
            className="w-full bg-secondary rounded-md px-3 py-2 text-sm"
            onChange={(e) => onPropertyChange('gap', e.target.value)}
          >
            <option value="0">0</option>
            <option value="0.5rem">8px</option>
            <option value="1rem">16px</option>
            <option value="1.5rem">24px</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-foreground/80">Number of Items</label>
          <input
            type="range"
            min="1"
            max="10"
            value={itemCount}
            onChange={(e) => onItemCountChange(parseInt(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-foreground/80">{itemCount} items</span>
        </div>
      </div>
    </div>
  );
};

export default FlexControls;