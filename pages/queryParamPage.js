// pages/QueryParamPage.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function QueryParamPage() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    router.push(`/query?value=${inputValue}`);
  };

  return (
    <main>
      <div>
        <Link href="/">Home</Link>
      </div>
      <h1>Append Query Parameter</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter value..."
      />
      <button onClick={handleButtonClick}>Append Value</button>
    </main>
  );
}
