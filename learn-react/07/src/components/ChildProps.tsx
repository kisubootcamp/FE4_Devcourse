export default function ChildProps({
  header,
  content,
  footer,
}: ChildPropsProps) {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  );
}
