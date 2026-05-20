import { useState, useEffect } from "react";

interface KeyData {
  data: string,
  unit: string,
  code: string
}

interface KeyboardLayoutData {
  R4: KeyData[],
  R3: KeyData[],
  R2: KeyData[],
  R1: KeyData[],
  bR1: KeyData[]
}

interface Props {
  layoutData: KeyboardLayoutData
}

function Key({ layoutData }: Props) {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKeys(prev => new Set(prev).add(e.code));
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      setPressedKeys(prev => {
        const next = new Set(prev);
        next.delete(e.code);
        return next
      });
    };
    const handleBlur = () => setPressedKeys(new Set());

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    }
  }, []);

  return (
    <>
      {
        (Object.keys(layoutData) as (keyof KeyboardLayoutData)[]).map((row) => (
          <div className={row}>
            {layoutData[row].map((key) => (
              <span 
                key={key.code} 
                className={`${key.unit} ${pressedKeys.has(key.code) ? 'p' : ''}`} 
                onMouseDown={(e) => {(e.target as HTMLElement).classList.add('p');}} 
                onMouseUp={(e) => (e.target as HTMLElement).classList.remove('p')}>  </span>
            ))}
          </div>
        ))
      }
    </>
  )
}

export default Key
