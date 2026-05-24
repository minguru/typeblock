import '@/styles/TypingBox.scss'

interface Props {
  typedText: string
}

export default function TypingBox ({ typedText }: Props) {
  return <>
    <div id="typingbox">
      <div className="text-box">
        <p className="sentence">
          Hi, this is just dummy sentence.
        </p>
      </div>
      <div className="typing-area">
        <span className="typed">
          {typedText.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </span>
        <div className="cursor"></div>
      </div>
    </div>
  </>
}
