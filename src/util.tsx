async function postRequest<TRequest, TResponse>(
    url: string,
    body?: TRequest
): Promise<TResponse> {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
    }

    return response.json();
}

function getUserId(): number {
    const href = document.querySelector<HTMLAnchorElement>('a[href*="/user/"]')?.href;
    const match = href?.match(/\/user\/(\d+)/);
    return match ? Number(match[1]) : -1;
}

export { postRequest, getUserId };
