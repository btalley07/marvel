const token = `3963876900386021`


// I need a Hero API and Key to add here
export const server_calls = {
    get: async () => {
        const response = await fetch(`http://gateway.marvel.com/v1/public`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
            
        });
        console.log(server_calls)
        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`http://gateway.marvel.com/v1/public`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Create data from server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`http://gateway.marvel.com/v1/public/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to UPDATE data from server')
        }

        return await response.json()
    },

    delete: async (id: string, data: any = {}) => {
        const response = await fetch(`http://gateway.marvel.com/v1/public/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }

        });


    }
}