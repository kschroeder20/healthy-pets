import React from 'react'
import { render, cleanup, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OwnerInfo from '../components/Cards/OwnerInfo'


afterEach(cleanup);

it("The correct fields render", async () => {
    const { getByTestId } = render(<OwnerInfo />)
    expect(getByTestId('owner')).toHaveTextContent("Name:");
    expect(getByTestId('homePhone')).toHaveTextContent("Home Phone:");
    expect(getByTestId('mobilePhone')).toHaveTextContent("Cell Phone:");
    expect(getByTestId('email')).toHaveTextContent("Email:");
    expect(getByTestId('address')).toHaveTextContent("Address:");
    expect(getByTestId('vetName')).toHaveTextContent("Primary Vet Name:");
    expect(getByTestId('vetPhone')).toHaveTextContent("Primary Vet Phone:");
})
