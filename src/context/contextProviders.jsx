'use client';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import React, { createContext, useState, useEffect } from 'react';

 
export const AllPackages = createContext();

 
export function ContextProvider({ children }) {
    const api = EXPORT_ALL_APIS();
    const [destinations, setDestinations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allPackages, setAllPackages] = useState([]);
    const [homePage, setHomePage] = useState([]);
    const [aboutPage, setAboutPage] = useState([]);
   

 
    useEffect(() => {
        const loadPackagesData = async () => {
                const [destinationsResp, categoriesResp, packagesResp, homePageResp, aboutPageResp] = await Promise.all([
                    api.fetchAllDestinations(),
                    api.fetchAllPackagecategories(),
                    api.fetchAllPackages(),
                    api.fetchHomePage(),
                    api.fetchAboutPage(),
                ]);
                setDestinations(destinationsResp);
                setCategories(categoriesResp);
                setAllPackages(packagesResp);
                setHomePage(homePageResp);
                setAboutPage(aboutPageResp);
             
        };
        loadPackagesData();  
    }, []); 

     

    
    return (
        <AllPackages.Provider
            value={{
                destinations,
                categories,
                allPackages,
                homePage,
                aboutPage,
            }}>
            {children}
        </AllPackages.Provider>
    );
}
