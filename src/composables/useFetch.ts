
// https://jsonplaceholder.typicode.com/guide/

export const useFetch = () => {

    // https://jsonplaceholder.typicode.com/users/1/todos

    const get = async (route: string, headers: HeadersInit = { 'Content-type': 'application/json; charset=UTF-8', }) => {
        const res = await fetch(route, { headers });
        const data = await res.json();
        console.log('GET:', data);
        return data;
    }

    const patch = async (route: string, payload: any, headers: HeadersInit = { 'Content-type': 'application/json; charset=UTF-8', }) => {
        const res = await fetch(route, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        console.log('PATCH:', data);
        return data;
    }

    const post = async (route: string, payload: any, headers: HeadersInit = { 'Content-type': 'application/json; charset=UTF-8', }) => {
        const res = await fetch(route, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        console.log('POST:', data);
        return data;
    }

    const del = async (route: string, id: string) => {
        const res = await fetch(`${route}/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log('DELETE:', data);
        return data;
    }

    return {
        del,
        get,
        patch,
        post,
    }
}