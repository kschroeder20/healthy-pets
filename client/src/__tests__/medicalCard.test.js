import React from 'react'
import { render, cleanup, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Medical from '../components/Cards/MedicalHistory'


afterEach(cleanup);

it("The correct fields render", async () => {
	const { getByTestId } = render(<Medical />);
	expect(getByTestId("Medications")).toHaveTextContent("Medications:");
	expect(getByTestId("Vaccines")).toHaveTextContent("Vaccines:");
	expect(getByTestId("Allergies")).toHaveTextContent("Allergies:");
	expect(getByTestId("Food")).toHaveTextContent("Food:");
});
