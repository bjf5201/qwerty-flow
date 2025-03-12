export default function MainContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <main className={`container mx-auto px-4 ${className}`}>{children}</main>;
}