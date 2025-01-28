import React from 'react';

interface FlexItemProps {
  index: number;
}

const FlexItem: React.FC<FlexItemProps> = ({ index }) => {
  console.log('Rendering FlexItem:', index);

  return (
    <div
      className="min-w-[100px] min-h-[100px] bg-purple/20 rounded-lg border border-purple/30 flex items-center justify-center transition-all duration-300 hover:bg-purple/30"
    >
      <span className="text-sm font-medium text-purple-light">Item {index + 1}</span>
    </div>
  );
};

export default FlexItem;