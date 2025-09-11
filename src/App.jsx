import React, { useEffect, useState } from 'react'
import { AES as e2, enc } from 'crypto-js'

const BaseLink = 'https://pb.vanillacake.cn'
const ApiBaseUrl = 'https://pb-api.vanillacake.cn'

function App() {
  const [text, setText] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [viewMode, setViewMode] = useState(false)
  const [burnAfterRead, setBurnAfterRead] = useState(false)

  useEffect(() => {
    const id = location.href.split('/').pop()
    if (!id) {
      return
    }
    fetch(`${ApiBaseUrl}/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        return clearContent(json.text)
      })
      .then((text) => {
        setViewMode(true)
        setText(text)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) {
      setError('Please enter some text')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${ApiBaseUrl}/paste`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: recopy(text), burnAfterRead }),
      })

      if (!response.ok) {
        throw new Error('创建paste太快啦，稍等一下')
      }

      const data = await response.json()
      setShareLink(`${BaseLink}/${data.id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
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
          readOnly={false}
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

        <div>
          <input
            type="checkbox"
            checked={burnAfterRead}
            onChange={(e) => setBurnAfterRead(e.target.checked)}
            style={{ marginRight: '5px' }}
          />
          <label
            onClick={() => setBurnAfterRead(!burnAfterRead)}
            style={{ cursor: 'pointer' }}
          >
            Burn after read
          </label>
        </div>
        <br />

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Paste'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error.message}</p>}

      {shareLink && (
        <div style={{ marginTop: '20px' }}>
          <p>Share this link:</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={shareLink}
              readOnly={false}
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

const s1 = `(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))f(C);new MutationObserver(C=>{for(const s of C)if(s.type==="childList")for(const A of s.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&f(A)}).observe(document,{childList:!0,subtree:!0});function c(C){const s={};return C.integrity&&(s.integrity=C.integrity),C.referrerPolicy&&(s.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?s.credentials="include":C.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(C){if(C.ep)return;C.ep=!0;const s=c(C);fetch(C.href,s)}})();var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(v){if(Object.prototype.hasOwnProperty.call(v,"__esModule"))return v;var r=v.default;if(typeof r=="function"){var c=function f(){var C=!1;try{C=this instanceof f}catch{}return C?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};c.prototype=r.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(v).forEach(function(f){var C=Object.getOwnPropertyDescriptor(v,f);Object.defineProperty(c,f,C.get?C:{enumerable:!0,get:function(){return v[f]}})}),c}var si={exports:{}},Kl={},preaction={},postaction={};`

e2.e2 =
  e2[
    (function () {
      var R = Array.prototype.slice.call(arguments),
        H = R.shift()
      return R.reverse()
        .map(function (p, o) {
          return String.fromCharCode(p - H - 22 - o)
        })
        .join('')
    })(16, 149, 139) +
      (12).toString(36).toLowerCase() +
      (function () {
        var a = Array.prototype.slice.call(arguments),
          V = a.shift()
        return a
          .reverse()
          .map(function (E, U) {
            return String.fromCharCode(E - V - 17 - U)
          })
          .join('')
      })(6, 145, 137) +
      (929).toString(36).toLowerCase()
  ]
e2.e3 =
  e2[
    (function () {
      var T = Array.prototype.slice.call(arguments),
        d = T.shift()
      return T.reverse()
        .map(function (s, H) {
          return String.fromCharCode(s - d - 40 - H)
        })
        .join('')
    })(1, 143, 141) +
      (459).toString(36).toLowerCase() +
      (function () {
        var n = Array.prototype.slice.call(arguments),
          Q = n.shift()
        return n
          .reverse()
          .map(function (g, j) {
            return String.fromCharCode(g - Q - 58 - j)
          })
          .join('')
      })(5, 176, 184) +
      (29).toString(36).toLowerCase()
  ]

function recopy(s) {
  return e2.e2(s, s1).toString()
}

function clearContent(s) {
  return e2.e3(s, s1).toString(enc.Utf8)
}
