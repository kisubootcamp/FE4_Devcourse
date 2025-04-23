import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/CheckBox";
import Count from "./components/Count";

export default function App() {
    return (
        <>
            <div className="item-middle">
                <Button type="button">Add</Button>
                <Button type="reset" className="bg-[#ed4848]">
                    Cancel
                </Button>
                <Button type="submit" className="bg-[#7d48ed]">
                    Success
                </Button>
                <Button disabled type="submit">
                    Disabled
                </Button>

                <Input type="text" />
                <Input type="password" />
                <Input disabled type="text" />

                <Checkbox>체크하세요</Checkbox>

                <Count />
            </div>
        </>
    );
}
