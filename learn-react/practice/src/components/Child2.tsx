export default function Child2({
  Header,
  Content,
  Footer,
}: {
  Header: React.ReactElement;
  Content: React.ReactElement;
  Footer: React.ReactNode;
}) {
  return (
    <>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
