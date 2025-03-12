export default function Timer({ remainingTime } : { remainingTime: number }) {
  return (
    <span className="text-primary-400 font-medium">Time: {remainingTime}</span>
  )
}