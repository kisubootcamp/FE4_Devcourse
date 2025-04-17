export default function Button({ text }: { text?: string }) {
  return <button>{text || "클릭"}</button>;
}
