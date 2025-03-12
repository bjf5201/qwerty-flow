export default function Text({ text, className } : { text: string, className?: string}) {
  return <div className={`text-slate-500 ${className}`}>{text}</div>
}