
// Data

export interface Project {
    id: string,
    name: string,
    template_link: string
}

// Requests

export type HTTPRequest = ProjectListRequest | OpenProjectRequest;

export type ProjectListRequest = {
    user_id: number
    template_link: string
}

export type OpenProjectRequest = {
    id: string
}

export type OpenProjectResponse = {
    tier_rows_html: string
    image_carousel_html: string
}

// Messages

export type WebsocketMessage = OpenProjectMessage | EditProjectMessage

export type OpenProjectMessage = {
    action: "open_project";
    project_id: string;
}

export type EditProjectMessage = {
    action: "edit_project";
    project_id: string;
    tier_container_html: string,
    image_carousel_html: string,
}

export class isOpenProjectMessage {
}