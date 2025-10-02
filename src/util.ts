async function apiRequest<TRequest, TResponse>(
    url: string,
    method: "GET" | "POST",
    body?: TRequest
): Promise<TResponse> {
    const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
    }

    return response.json() as Promise<TResponse>;
}

function getUserId(): number {
    const href = document.querySelector<HTMLAnchorElement>('a[href*="/user/"]')?.href;
    const match = href?.match(/\/user\/(\d+)/);
    return match ? Number(match[1]) : -1;
}


export { apiRequest, getUserId };
