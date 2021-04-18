import { useState } from 'react';

export function useInput() {
  const [data, setData] = useState('');

  const handleInput = (event) => {
    setData(event.target.value)
  }

  return [data, handleInput];  
}