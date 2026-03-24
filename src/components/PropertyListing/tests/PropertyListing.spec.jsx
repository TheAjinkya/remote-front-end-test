import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

const mockProperties = [
    { id: 1, price: 100000, propertyTitle: 'Property 1', displayAddress: 'Address 1', branchName: 'Branch 1', summary: 'Summary 1', mainImage: 'image1.jpg' },
    { id: 2, price: 200000, propertyTitle: 'Property 2', displayAddress: 'Address 2', branchName: 'Branch 2', summary: 'Summary 2', mainImage: 'image2.jpg' },
    { id: 3, price: 300000, propertyTitle: 'Property 3', displayAddress: 'Address 3', branchName: 'Branch 3', summary: 'Summary 3', mainImage: 'image3.jpg' },
    { id: 4, price: 400000, propertyTitle: 'Property 4', displayAddress: 'Address 4', branchName: 'Branch 4', summary: 'Summary 4', mainImage: 'image4.jpg' },
    { id: 5, price: 500000, propertyTitle: 'Property 5', displayAddress: 'Address 5', branchName: 'Branch 5', summary: 'Summary 5', mainImage: 'image5.jpg' },
];

describe('PropertyListing', () => {

    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            ok:true, 
            json:()=> Promise.resolve(mockProperties)
        })
    })

    beforeEach(()=>{
        fetch.mockClear();
    })

    it('should render five property cards', async () => {
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
