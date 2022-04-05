import { render } from "@testing-library/react";
import CounterApp from "../components/CounterApp";

describe('<CounterApp/> test methods', () => {

    const { container } = render(<CounterApp/>);

    test('empty initialization shows 0', () => {
        
    });

});