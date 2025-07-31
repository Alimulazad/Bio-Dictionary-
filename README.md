# Bio-Dictionary-// Bio Dictionary App (React + Tailwind) // Minimal Demo Version with Searchable Words

import { useState } from "react";

const data = { cyto: { class: "Root", meaning: "কোষ", example: "Cytoplasm", explanation: "কোষের অভ্যন্তরীণ তরল পদার্থ" }, bio: { class: "Prefix", meaning: "জীবন", example: "Biology", explanation: "জীব ও জীবনের অধ্যয়ন" }, logy: { class: "Suffix", meaning: "অধ্যয়ন", example: "Biology", explanation: "কোনো বিষয়ের বিজ্ঞানভিত্তিক অধ্যয়ন" }, derm: { class: "Root", meaning: "চর্ম (ত্বক)", example: "Dermatology", explanation: "চর্ম সংক্রান্ত চিকিৎসা বিজ্ঞান" }, auto: { class: "Prefix", meaning: "স্বয়ং", example: "Autotroph", explanation: "স্বয়ং খাদ্য তৈরিকারী জীব" } };

export default function BioDictionaryApp() { const [query, setQuery] = useState(""); const word = data[query.toLowerCase()];

return ( <div className="min-h-screen bg-white text-black flex flex-col items-center p-6"> <h1 className="text-3xl font-bold mb-6">🔬 Bio Dictionary (Demo)</h1>

<input
    type="text"
    placeholder="Search a biological word (e.g. cyto)"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="border p-2 rounded-lg w-full max-w-md mb-4"
  />

  {word ? (
    <div className="bg-green-100 border border-green-300 p-4 rounded-xl w-full max-w-md">
      <p><strong>🔍 Word:</strong> {query}</p>
      <p><strong>📚 Class:</strong> {word.class}</p>
      <p><strong>🔤 Meaning:</strong> {word.meaning}</p>
      <p><strong>🧪 Example:</strong> {word.example}</p>
      <p><strong>📖 Explanation:</strong> {word.explanation}</p>
    </div>
  ) : (
    query && (
      <div className="text-red-600 mt-4">❌ শব্দটি খুঁজে পাওয়া যায়নি</div>
    )
  )}
</div>

); }

// Bio Dictionary App (React + Tailwind) // Minimal Demo Version with Searchable Words

import { useState } from "react";

const data = { cyto: { class: "Root", meaning: "কোষ", example: "Cytoplasm", explanation: "কোষের অভ্যন্তরীণ তরল পদার্থ" }, bio: { class: "Prefix", meaning: "জীবন", example: "Biology", explanation: "জীব ও জীবনের অধ্যয়ন" }, logy: { class: "Suffix", meaning: "অধ্যয়ন", example: "Biology", explanation: "কোনো বিষয়ের বিজ্ঞানভিত্তিক অধ্যয়ন" }, derm: { class: "Root", meaning: "চর্ম (ত্বক)", example: "Dermatology", explanation: "চর্ম সংক্রান্ত চিকিৎসা বিজ্ঞান" }, auto: { class: "Prefix", meaning: "স্বয়ং", example: "Autotroph", explanation: "স্বয়ং খাদ্য তৈরিকারী জীব" } };

export default function BioDictionaryApp() { const [query, setQuery] = useState(""); const word = data[query.toLowerCase()];

return ( <div className="min-h-screen bg-white text-black flex flex-col items-center p-6"> <h1 className="text-3xl font-bold mb-6">🔬 Bio Dictionary (Demo)</h1>

<input
    type="text"
    placeholder="Search a biological word (e.g. cyto)"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="border p-2 rounded-lg w-full max-w-md mb-4"
  />

  {word ? (
    <div className="bg-green-100 border border-green-300 p-4 rounded-xl w-full max-w-md">
      <p><strong>🔍 Word:</strong> {query}</p>
      <p><strong>📚 Class:</strong> {word.class}</p>
      <p><strong>🔤 Meaning:</strong> {word.meaning}</p>
      <p><strong>🧪 Example:</strong> {word.example}</p>
      <p><strong>📖 Explanation:</strong> {word.explanation}</p>
    </div>
  ) : (
    query && (
      <div className="text-red-600 mt-4">❌ শব্দটি খুঁজে পাওয়া যায়নি</div>
    )
  )}
</div>

); }

