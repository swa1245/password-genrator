import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [charLength, setCharLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    let newPassword = "";
    for (let i = 0; i < charLength; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container bg-gray-700 text-white p-6 mx-auto mt-10 w-[400px] rounded-lg shadow-lg">
      {/* Password Display */}
      <div className="header flex justify-between items-center text-2xl font-bold mb-4">
        <div className="title">{password || "Generated Password"}</div>
        <button
          className="copy-btn px-4 py-2 rounded-md bg-green-700 text-white uppercase cursor-pointer"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      {/* Character Length Control */}
      <div className="chr-len text-lg mt-6">
        <div className="flex justify-between">
          <label>Char Length: {charLength}</label>
        </div>
        <input
          type="range"
          className="w-full mt-2"
          min="4"
          max="20"
          value={charLength}
          onChange={(e) => setCharLength(Number(e.target.value))}
        />
      </div>

      {/* Options */}
      <div className="mt-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label>Include Uppercase</label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <label>Include Symbols</label>
        </div>
      </div>

      {/* Generate Button */}
      <button
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-lg"
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
};

export default App;
