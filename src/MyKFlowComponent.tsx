import React from 'react';
import { FlowBuilder, NodeTypes } from 'react-flow-builder';

const initialData = {
  nodes: [
    { id: 'node1', type: NodeTypes.START, position: { x: 100, y: 100 } },
    { id: 'node2', type: NodeTypes.ACTION, position: { x: 300, y: 100 }, text: 'Action 1' },
    { id: 'node3', type: NodeTypes.DECISION, position: { x: 500, y: 100 }, text: 'Decision 1' },
    { id: 'node4', type: NodeTypes.ACTION, position: { x: 700, y: 100 }, text: 'Action 2' },
    { id: 'node5', type: NodeTypes.END, position: { x: 900, y: 100 } },
  ],
  edges: [
    { id: 'edge1', source: 'node1', target: 'node2' },
    { id: 'edge2', source: 'node2', target: 'node3' },
    { id: 'edge3', source: 'node3', target: 'node4', text: 'Yes' },
    { id: 'edge4', source: 'node3', target: 'node5', text: 'No' },
  ],
};

const MyFlowChartComponent = () => {
  const handleDataChange = (newData:any) => {
    // Handle data changes
    console.log('New flow chart data:', newData);
  };

  return (
    <div>
      <FlowBuilder
        data={initialData}
        onDataChange={handleDataChange}
        readonly={false}
      />
    </div>
  );
};

export default MyFlowChartComponent;
