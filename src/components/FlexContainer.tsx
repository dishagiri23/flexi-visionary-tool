import React from 'react';
import FlexItem from './FlexItem';

interface FlexContainerProps {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  flexWrap: string;
  gap: string;
  itemCount: number;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  itemCount,
}) => {
  console.log('Rendering FlexContainer with properties:', {
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    itemCount,
  });

  return (
    <div className="w-full h-[500px] glass-panel rounded-lg p-6">
      <div
        className="w-full h-full border-2 border-purple/20 rounded-lg transition-all duration-300 ease-out animate-property-change"
        style={{
          display: 'flex',
          flexDirection: flexDirection as any,
          justifyContent,
          alignItems,
          flexWrap: flexWrap as any,
          gap,
        }}
      >
        {Array.from({ length: itemCount }).map((_, index) => (
          <FlexItem key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FlexContainer;