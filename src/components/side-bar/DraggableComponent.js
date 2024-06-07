import React from 'react';
import { useReactFlow } from 'reactflow';
import { capitalizeString, generateContent, generateNodeId } from '../../utils';

const DraggableComponent = ({ setMenuVisible }) => {
  const { setNodes } = useReactFlow();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleClick = (nodeType) => {
    const newNode = {
      id: generateNodeId(),
      type: nodeType,
      position: {
        x: 0,
        y: 0,
      },
      data: {
        label: capitalizeString(nodeType),
        content: generateContent(nodeType),
      },
    };
    setNodes((nds) => nds.concat(newNode));
    setMenuVisible(false);
  };

  return (
    <div className='space-y-4'>
      <div className='description hidden lg:block'>
        You can drag these nodes to the right.
      </div>
      <div className='description block lg:hidden'>
        Click on a node to add to the workspace.
      </div>

      <div className='space-y-4'>
        <div
          className='rounded-md cursor-grab'
          onDragStart={(event) => onDragStart(event, 'defaultNode')}
          onClick={() => handleClick('defaultNode')}
          draggable
        >
          <div className='flex bg-white p-3 border-[1px] rounded-md capitalize min-w-56 hover:shadow-md transition-all duration-300'>
            <p className='font-semibold'>Default</p>
          </div>
        </div>

        <div
          className='cursor-grab bg-transparent rounded-md bg-red-300'
          onDragStart={(event) => onDragStart(event, 'custom')}
          onClick={() => handleClick('custom')}
          draggable
        >
          <div className='flex shadow-md rounded-md capitalize min-w-56 hover:shadow-md transition-all duration-300'>
            <div className='w-full  rounded-md'>
              <h2 className='font-bold font-sans bg-teal-200 w-full px-2 py-1 rounded-t-lg'>
                Send Message
              </h2>
              <p className='px-2 py-1 rounded-b-lg'>Text message 1</p>
            </div>
          </div>
        </div>
      </div>

      <div className='description text-sm hidden lg:block'>
        Click on the text to edit and right click on node to duplicate or
        delete.
      </div>
    </div>
  );
};

export default DraggableComponent;
