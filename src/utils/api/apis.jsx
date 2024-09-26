export const EXPORT_ALL_APIS = () => {
    const fetchAllDestinations = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/destination`)
        let result = await resp.json()
        return result
    }
    const fetchAllPackagecategories = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/package_category`)
        let result = await resp.json()
        return result
    }
    const fetchAllPackages = async () => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages`)
        let result = await resp.json()
        return result
    }
    const fetchDestinationsFilterPackages = async (slug) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/destination?slug=${slug}`);
        let result = await resp.json();
        let destinationId = result[0]?.id.toString()
        if (!destinationId) {
            console.log('no destination id found')
        } else {

            let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages?destination=${destinationId}`);
            let filterResponse = await response.json()
            return filterResponse
        }
    };
    const fetchCategoriesFilterPackages = async (slug) => {
        let resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/package_category?slug=${slug}`);
        let result = await resp.json();
        let categoryId = result[0]?.id.toString()
        if (!categoryId) {
            console.log('no category id found')
        } else {
            let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/packages?package_category=${categoryId}`);
            let filterResponse = await response.json()
            return filterResponse
        }


    };
    return {
        fetchAllDestinations,
        fetchAllPackagecategories,
        fetchAllPackages,
        fetchDestinationsFilterPackages,
        fetchCategoriesFilterPackages
    }

}
