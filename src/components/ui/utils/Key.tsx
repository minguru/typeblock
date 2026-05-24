import KeyboardLayoutData from "@/constants/KeyboardLayoutData"

interface Props {
  layoutData: KeyboardLayoutData
  pressedKeys: Set<string>
}

export default function Key ({ layoutData, pressedKeys }: Props) {

  return (
    <>
      {
        (Object.keys(layoutData) as (keyof KeyboardLayoutData)[]).map((row, i) => (
          <div className={row} key={i}>
            {layoutData[row].map((key) => (
              <span 
                key={key.code} 
                className={`${key.unit} ${pressedKeys.has(key.code) ? 'p' : ''}`} 
                data-key-code={key.code}
                data-key-data={key.data}
                data-key-actual={key.key}
              >
                {key.text?.map((text, i) => (
                  <em key={i}>
                    {i < key.text!.length - 1 ? text : ` ${text}`}
                    {i < key.text!.length - 1 && <br />}
                  </em>
                ))}
              </span>
            ))}
          </div>
        ))
      }
    </>
  )
}
