export default function CheckboxLabel({ labelId }: CheckboxLabel) {
  return (
    <>
      <label htmlFor={labelId} className='flex items-center gap-2 text-sm mb-4 font-medium'>
        <input type='checkbox' id={labelId} />
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>.
        </span>
      </label>
    </>
  );
}
