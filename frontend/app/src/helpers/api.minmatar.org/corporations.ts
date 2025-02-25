import type { Corporation } from '@dtypes/api.minmatar.org'

const API_ENDPOINT =  `${import.meta.env.API_URL}/api/eveonline/corporations`

export async function get_all_corporations(access_token:string) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
    }

    console.log(`Requesting: ${API_ENDPOINT}/corporations`)

    try {
        const response = await fetch(`${API_ENDPOINT}/corporations`, {
            headers: headers
        })

        console.log(response)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json() as Corporation[];
    } catch (error) {
        throw new Error(`Error fetching corporations: ${error.message}`);
    }
}

export async function get_corporation_by_id(access_token:string, id:number) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
    }

    console.log(`Requesting: ${API_ENDPOINT}/corporations/${id}`)

    try {
        const response = await fetch(`${API_ENDPOINT}/corporations/${id}`, {
            headers: headers
        })

        console.log(response)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json() as Corporation;
    } catch (error) {
        throw new Error(`Error fetching corporation: ${error.message}`);
    }
}