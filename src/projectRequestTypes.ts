export interface ProjectListRequest {
    user_id: number
    template_link: string
}

export interface Project {
    id: string,
    name: string,
    template_link: string
}

export interface OpenProjectRequest {
    id: string
}

export interface OpenProjectResponse {
    tier_rows_html: string
    image_carousel_html: string
}
