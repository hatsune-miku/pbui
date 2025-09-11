import React, { useEffect, useRef, useState } from 'react'
import CryptoJS from 'crypto-js'

import './App.css'

const BaseLink = 'https://pb.vanillacake.cn'
const ApiBaseUrl = 'https://pb-api.vanillacake.cn'

function btoa2(ab) {
  return btoa(String.fromCharCode(...new Uint8Array(ab)))
}

function btoa1(s) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(s))
}
function atob1(s) {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(s))
}

const s1 = `(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))f(C);new MutationObserver(C=>{for(const s of C)if(s.type==="childList")for(const A of s.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&f(A)}).observe(document,{childList:!0,subtree:!0});function c(C){const s={};return C.integrity&&(s.integrity=C.integrity),C.referrerPolicy&&(s.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?s.credentials="include":C.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(C){if(C.ep)return;C.ep=!0;const s=c(C);fetch(C.href,s)}})();var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(v){if(Object.prototype.hasOwnProperty.call(v,"__esModule"))return v;var r=v.default;if(typeof r=="function"){var c=function f(){var C=!1;try{C=this instanceof f}catch{}return C?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};c.prototype=r.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(v).forEach(function(f){var C=Object.getOwnPropertyDescriptor(v,f);Object.defineProperty(c,f,C.get?C:{enumerable:!0,get:function(){return v[f]}})}),c}var si={exports:{}},Kl={},preaction={},postaction={};`
const cc1 =
  (17)
    .toString(36)
    .toLowerCase()
    .split('')
    .map(function (I) {
      return String.fromCharCode(I.charCodeAt() + -39)
    })
    .join('') +
  (35974).toString(36).toLowerCase() +
  (function () {
    var K = Array.prototype.slice.call(arguments),
      N = K.shift()
    return K.reverse()
      .map(function (m, t) {
        return String.fromCharCode(m - N - 21 - t)
      })
      .join('')
  })(34, 176) +
  (30)
    .toString(36)
    .toLowerCase()
    .split('')
    .map(function (O) {
      return String.fromCharCode(O.charCodeAt() + -71)
    })
    .join('') +
  (43282284).toString(36).toLowerCase() +
  (function () {
    var t = Array.prototype.slice.call(arguments),
      n = t.shift()
    return t
      .reverse()
      .map(function (A, c) {
        return String.fromCharCode(A - n - 6 - c)
      })
      .join('')
  })(20, 148, 142) +
  (914).toString(36).toLowerCase() +
  (30)
    .toString(36)
    .toLowerCase()
    .split('')
    .map(function (X) {
      return String.fromCharCode(X.charCodeAt() + -71)
    })
    .join('') +
  (48032798).toString(36).toLowerCase()

const cc2 =
  (function () {
    var F = Array.prototype.slice.call(arguments),
      o = F.shift()
    return F.reverse()
      .map(function (a, V) {
        return String.fromCharCode(a - o - 32 - V)
      })
      .join('')
  })(54, 194, 200, 194, 202, 203, 169) +
  (30)
    .toString(36)
    .toLowerCase()
    .split('')
    .map(function (L) {
      return String.fromCharCode(L.charCodeAt() + -71)
    })
    .join('') +
  (20436).toString(36).toLowerCase() +
  (function () {
    var S = Array.prototype.slice.call(arguments),
      s = S.shift()
    return S.reverse()
      .map(function (L, q) {
        return String.fromCharCode(L - s - 16 - q)
      })
      .join('')
  })(13, 146, 101, 147, 129, 135, 97, 138) +
  (13).toString(36).toLowerCase() +
  (function () {
    var d = Array.prototype.slice.call(arguments),
      T = d.shift()
    return d
      .reverse()
      .map(function (o, B) {
        return String.fromCharCode(o - T - 45 - B)
      })
      .join('')
  })(56, 202)

const cc3 = {
  clear: function (s, bb1) {
    if (!s) return ''
    return btoa1(s)
    const aa1 = this.cc4(s)
    const aa2 = this.cc4(bb1)
    const aa3 = []
    for (let i = 0; i < aa1.length; i++) {
      const aa4 = i % aa2.length
      // 加密步骤：字符代码 + 密钥字符代码 + 位置偏移量，然后异或
      const code = (aa1[i] + aa2[aa4] + i) ^ aa2[aa4]
      aa3.push(code)
    }
    return this.cc5(aa3)
  },
  unshift: function (s, bb2) {
    if (!s) return ''
    return atob1(s)
    const aa1 = this.cc6(s)
    const aa2 = this.cc4(bb2)
    const aa3 = []
    for (let i = 0; i < aa1.length; i++) {
      const aa4 = i % aa2.length
      // 解密步骤：异或后减去密钥字符代码和位置偏移量
      const code = (aa1[i] ^ aa2[aa4]) - aa2[aa4] - i
      aa3.push(code)
    }
    return this.cc7(aa3)
  },
  b: {
    /**
     * @param {File} k
     */
    reduce(k) {
      return new Promise((resolve, reject) => {
        const r = new FileReader()
        r.readAsArrayBuffer(k)

        /**
         * @param {ProgressEvent<FileReader>} e
         */
        r.onload = (e) => {
          const ab = e.target.result
          const b64 = btoa2(ab)
          resolve(b64)
        }
        r.onerror = (e) => {
          reject(e)
        }
      })
    },
    /**
     * @param {string} k
     */
    kmeans(k, k1) {
      _vc(k, k1)
    },
  },
  cc4: function (s) {
    const aa1 = []
    for (let i = 0; i < s.length; i++) {
      aa1.push(s.charCodeAt(i))
    }
    return aa1
  },
  cc7: function (aa2) {
    return String.fromCharCode.apply(null, aa2)
  },
  cc5: function (codes) {
    let aa1 = ''
    for (let i = 0; i < codes.length; i++) {
      aa1 += String.fromCharCode(codes[i])
    }
    return btoa1(aa1)
  },
  cc6: function (s) {
    const cc0 = atob1(s)
    const cc9 = []
    for (let i = 0; i < cc0.length; i++) {
      cc9.push(cc0.charCodeAt(i))
    }
    return cc9
  },
}
const e2 = {
  [cc1]: (s, s1) => {
    return cc3.clear(s, s1)
  },
  [cc2]: (s, s1) => {
    return cc3.unshift(s, s1)
  },
}

e2.e2 = e2[cc1]
e2.e3 = e2[cc2]

const mm1 = 48

function _vc(b, f) {
  const mimeType = 'application/octet-stream'
  const link = document.createElement('a')
  link.href = `data:${mimeType};base64,${b}`
  link.download = f
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function recopy(s) {
  if (s.length < mm1) {
    s = `${s}Array.prototype.slice${s}创建paste太快啦，稍等一下`
  }
  return e2.e2(s, s1)
}

function clearContent(s) {
  s = e2.e3(s, s1)
  s = s.split('Array.prototype.slice')[0]
  return s
}

function App() {
  const [text, setText] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [viewMode, setViewMode] = useState(false)
  const [burnAfterRead, setBurnAfterRead] = useState(false)
  const [decryptPassword, setDecryptPassword] = useState('')
  const [receivedZ, setReceivedZ] = useState(false)
  const [receivedB, setReceivedB] = useState(false)
  const [processing, setProcessing] = useState(false)

  /** @type {[File, any]} */
  const [file, setFile] = useState(null)

  const [password, setPassword] = useState('')
  const [z, x] = useState(false)

  const passwordInputRef = useRef(null)
  const encryptedTextRef = useRef('')

  useEffect(() => {
    if (z) {
      passwordInputRef.current?.focus()
    }
  }, [z])

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
        setReceivedZ(json.z)
        setReceivedB(json.b)
        return json.z
          ? { text: json.text, z: true }
          : { text: clearContent(json.text), z: false }
      })
      .then(({ text, z }) => {
        setViewMode(true)
        if (!z) {
          setText(text)
        } else {
          encryptedTextRef.current = text
        }
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

    let b64 = null

    if (file) {
      setProcessing(true)
      b64 = await cc3.b.reduce(file)
      setProcessing(false)
    }

    try {
      const t = z ? e2.e2(text, password) : recopy(text)
      const response = await fetch(`${ApiBaseUrl}/paste`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          t,
          b: burnAfterRead,
          z,
          oc: b64,
          oct: file?.name,
        }),
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

  const handleDecrypt = () => {
    const d = e2.e3(encryptedTextRef.current, decryptPassword)
    setText(d)
    setReceivedZ(false)
  }

  if (viewMode) {
    if (receivedB) {
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
          <div class="notice">注意：这是一封阅后即焚的消息。</div>
          <button onClick={() => setReceivedZ(false)}>开启</button>
        </div>
      )
    }

    if (receivedZ) {
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
          <div class="notice">请输入密码。</div>
          <input
            className="fancy-input"
            type="password"
            value={decryptPassword}
            onChange={(e) => setDecryptPassword(e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <button onClick={handleDecrypt}>解密</button>
        </div>
      )
    }

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
        {decryptPassword ? (
          <div className="notice">如果看到乱码说明密码错误。</div>
        ) : null}
        <textarea
          value={text}
          readOnly={false}
          onChange={(e) => setText(e.target.value)}
          rows={32}
          style={{ width: '100%', marginBottom: '10px', fontSize: '24px' }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            justifyContent: 'stretch',
          }}
        >
          <button style={{ flex: 1 }} onClick={() => handleCopy(text)}>
            复制
          </button>
          <button style={{ flex: 1 }} onClick={handleCreateMode}>
            创建新密信
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Pastebin!</h1>

      <form>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          rows={10}
          style={{
            width: '100%',
            marginBottom: '10px',
            fontFamily: '"Lucida Console", Consolas, Monaco, monospace',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
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
              阅后即焚
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={z}
              onChange={(e) => x(e.target.checked)}
              style={{ marginRight: '5px' }}
            />
            <label onClick={() => x(!z)} style={{ cursor: 'pointer' }}>
              自定义密文
            </label>

            {z ? (
              <input
                ref={passwordInputRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: '12px' }}
                placeholder="秘钥"
              />
            ) : null}
          </div>
        </div>

        <br />

        <div>
          <label>可以附个文件：</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <br />

        {file && file.size > 16 * 1024 * 1024 ? (
          <React.Fragment>
            <div>
              <span class="notice">
                注意：文件大小超过 16 MB，发送会有点儿慢或是失败
              </span>
            </div>
            <br />
          </React.Fragment>
        ) : null}

        <button type="submit" disabled={loading} onClick={handleSubmit}>
          {loading ? 'Creating...' : '生成分享链接'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error.message}</p>}

      {shareLink && (
        <div style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              className="fancy-input"
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
