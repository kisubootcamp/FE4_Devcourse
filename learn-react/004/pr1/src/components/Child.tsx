export default function Child({
  header,
  footer,
  content,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <>
      {header}
      {footer}
      {content}
    </>
  );
}
