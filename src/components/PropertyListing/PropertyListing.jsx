import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { element } from 'prop-types';

const DUMMY_PROPERTY = {
    id: 73864112,
    bedrooms: 3,
    summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
    displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

const API_URL = 'http://localhost:3000/api/properties'

const PropertyListing = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {

            try {
                const response = await fetch(API_URL);
                if (!response.ok){
                    throw new Error('Error')
                }
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                if(error instanceof Error){
                    console.error(error.message)
                }
            }
        }
        getProperties();
    }, [])

    return (
        <ul className="PropertyListing">
            {properties && properties.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
