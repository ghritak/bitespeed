import React, { memo, useEffect, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import CustomHandle from '../custom-handle/CustomHandle';

const EmailNode = (props) => {
  const {
    id,
    data: { label, content },
  } = props;
  const [title, setTitile] = useState(label);
  const [para, setPara] = useState(content);
  const { setNodes } = useReactFlow();

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            label: title,
            content: para,
          };
        }
        return node;
      })
    );
  }, [title, para]);

  return (
    <div className='flex items-start rounded-md capitalize hover:shadow-md transition-all duration-300'>
      <div className='flex flex-col '>
        <div className='bg-teal-200 rounded-t-md'>
          <input
            value={title}
            className='font-bold font-sans px-2 py-1 outline-[#8929e0] bg-transparent min-w-56 '
            onChange={(e) => setTitile(e.target.value)}
          />
        </div>
        <div className='rounded-b-md bg-white'>
          <input
            value={para}
            className='px-2 py-1 outline-[#8929e0] min-w-56 bg-transparent'
            onChange={(e) => setPara(e.target.value)}
          />
        </div>
      </div>

      <CustomHandle type='target' position={Position.Top} isConnectable={1} />
      <Handle type='source' position={Position.Bottom} />
    </div>
  );
};

export default memo(EmailNode);
