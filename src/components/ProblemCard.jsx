import { useState } from 'react'
import './ProblemCard.css'

function ProblemCard({ problem, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(problem.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = problem.code
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`problem-card ${isOpen ? 'open' : ''}`}
      style={{ '--i': index }}
      onClick={toggleOpen}
    >
      <div className="problem-header">
        <div className="problem-left">
          <span className="problem-number">#{problem.number}</span>
          <span className="problem-title">{problem.title}</span>
        </div>
        <span className={`toggle-icon ${isOpen ? 'rotated' : ''}`}>▼</span>
      </div>
      <div className={`problem-body ${isOpen ? 'open' : ''}`}>
        <div className="code-wrapper">
          <span className="code-filename">{problem.filename}</span>
          <button
            className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? '✓ Copiat!' : '📋 Copiază'}
          </button>
          <pre>
            <code>{problem.code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ProblemCard
