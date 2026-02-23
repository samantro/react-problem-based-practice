import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  const [password, setPassword] = useState("password");
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [length, setLength] = useState(8);
  const inputRef = useRef(null);

  const handleCopy = async () => {
    inputRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  // console.log(password, password.length,  number, specialChar, length)
  const passwordGenerator = useCallback(()=>{
    let char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if(number) char += "1234567890";
    if(specialChar) char += "!@#$%^&*()"
    let pass = "";
    for(let i=0;i<length;i++){
      const index = Math.floor(Math.random() * (char.length + 1));
      pass += char.charAt(index);
    }
    setPassword(pass);
  }, [number, specialChar, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, specialChar, setPassword])
  return (
    <>
      <div>
            <div>
                <input type="text" value={password} ref={inputRef} readOnly/>
                <button onClick={handleCopy}>Copy</button>
            </div>
            <div>
                <label>
                    Number of characters: <input 
                        type="range"
                        min={3}
                        max={20}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </label>
                <label>
                    Numbers: <input 
                    type="checkbox"
                    checked={number}
                    onChange={() => setNumber(prev => !prev)}
                    />
                </label>
                <label>
                    Special Characters: <input 
                    type="checkbox"
                    checked={specialChar}
                    onChange={() => setSpecialChar(prev => !prev)}
                    />
                </label>
            </div>
        </div>
    </>
  )
}

export default App
