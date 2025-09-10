import React, { useEffect, useState } from 'react'
import { AES, enc } from 'crypto-js'

const BaseLink = 'https://pb.vanillacake.cn'
const ApiBaseUrl = 'https://pb-api.vanillacake.cn'

function App() {
  const [text, setText] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [viewMode, setViewMode] = useState(false)

  useEffect(() => {
    const id = location.href.split('/').pop()
    if (!id) {
      return
    }
    fetch(`${ApiBaseUrl}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => decode(res.text()))
      .then((data) => {
        setViewMode(true)
        setText(data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) {
      setError('Please enter some text')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`${ApiBaseUrl}/paste`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: encode(text),
      })

      if (!response.ok) {
        throw new Error('创建paste太快啦，稍等一下')
      }

      const data = await response.json()
      setShareLink(`${BaseLink}/${data.id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  const handleCreateMode = () => {
    setViewMode(false)
    setText('')
    setShareLink('')
  }

  if (viewMode) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <textarea
          value={text}
          readOnly
          rows={10}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <button onClick={() => handleCopy(text)}>Copy</button>
        <button onClick={handleCreateMode}>Create New</button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Pastebin!</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          rows={10}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Paste'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {shareLink && (
        <div style={{ marginTop: '20px' }}>
          <p>Share this link:</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={shareLink}
              readOnly
              style={{ flex: 1, padding: '5px', marginRight: '5px' }}
            />
            <button onClick={() => handleCopy(shareLink)}>Copy</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

function encode(s) {
  return AES.encrypt(s, '111sigewinne').toString(enc.Utf8)
}

function decode(s) {
  return AES.decrypt(s, '111sigewinne').toString(enc.Utf8)
}
