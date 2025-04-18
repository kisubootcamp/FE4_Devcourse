type HelloProps = {
  name: string;
};

export default function Hello({ name }: HelloProps) {
  return (
    <>
      <h1 className="text-4xl">Hello, {name}!</h1>
    </>
  );
}
