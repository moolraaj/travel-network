
'use client';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import React, { createContext, useState, useEffect } from 'react';


export const AllPackages = createContext();


export function ContextProvider({ children }) {
    const api = EXPORT_ALL_APIS();
    const [destinations, setDestinations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allPackages, setAllPackages] = useState([]);
    
    useEffect(() => {
        const loadAllDestinations = async () => {
            const resp = await api.fetchAllDestinations();
            setDestinations(resp);
        };
        const loadAllPackagecategories = async () => {
            const resp = await api.fetchAllPackagecategories();
            setCategories(resp);
        };
        const loadAllPackages = async () => {
            const resp = await api.fetchAllPackages();
            setAllPackages(resp);
        };
        loadAllDestinations();
        loadAllPackagecategories()
        loadAllPackages()
    }, []);

    return (
        <AllPackages.Provider value={{ destinations, categories,allPackages }}>
            {children}
        </AllPackages.Provider>
    );
}
