
export interface Video{
    type: string;
    site: string;
    key: number;
}

export interface GetParams{
    method: string | "GET";
    url: string;
    headers: {};
}

export interface PostParams{
    method: string | 'POST';
    url: string;
    headers: {};
    body: {};
}