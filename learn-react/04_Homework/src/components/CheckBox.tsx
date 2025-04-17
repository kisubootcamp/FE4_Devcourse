export default function CheckBox() {
    return (
        <>
            <div className="flex items-center gap-[8px]">
                <input
                    id="agree"
                    type="checkbox"
                    className="w-[20px] h-[20px] accent-[#4F4F4F] items-center"
                ></input>
                <label htmlFor="agree">
                    I agree with <b>terms</b> and <b>policies.</b>
                </label>
            </div>
        </>
    );
}
