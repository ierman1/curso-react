import { render } from "@testing-library/react";
import FirstApp from "../components/FirstApp";

describe('<FirstApp/> test methods', () => {

    test('must show the message "Hello, { name }!"', () => {
        const name = 'Germán';
        const expected = `Hello, ${ name }!`;
        const { getByText } = render(<FirstApp name={ name }/>);

        expect(getByText(expected)).toBeInTheDocument();
    });

});