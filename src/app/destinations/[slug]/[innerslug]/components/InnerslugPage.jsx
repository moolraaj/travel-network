'use client'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'
import React, { useEffect, useState } from 'react'
import Slider from './slider'
import ExcludeInclude from './excludeInclude'
import Itinerary from './itinerary'
import TopBanner from './topbanner'
 
function InnerslugPage({ slug }) {
    let api = EXPORT_ALL_APIS()
    let [data, setData] = useState([])
    useEffect(() => {
        let loadSinglePage = async () => {
            let result = await api?.fetchSinglePackagesApi(slug)
            setData(result)
        }
        loadSinglePage()
    }, [])
  
    let response=data.map((e)=>e?.acf?.all_packages[0])
    return (
        <>
        <TopBanner result={response[0]}/>
        <Slider response={response[0]}/>
        <Itinerary response={response[0]}/>
        <ExcludeInclude response={response[0]}/>
        </>
    )
}

export default InnerslugPage