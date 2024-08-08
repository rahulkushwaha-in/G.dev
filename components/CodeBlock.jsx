"use client"
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeBlock = ({ language, code, filename }) => {
  const [copied, setCopied] = useState(false);
  const customTheme = {
    ...oneDark,
    // Override specific colors
    'code[class*="language-"]': {
      color: "#f8f8f2",
      fontSize: "16px", // Adjust the font size as needed
    },
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 600);
  };

  return (
    <div className=" w-full border border-none overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span className="text-green-600 font-bold dark:text-white">
            {filename}
          </span>
          <span className="text-gray-400 dark:text-white">|</span>
          <span className="text-gray-800 font-bold dark:text-white">
            {language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-3 rounded">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="pl-1 pr-1 border max-h-96 sm:max-h-dvh overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={customTheme}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
