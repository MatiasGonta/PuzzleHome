export interface Image {
    src: string;
    id: string;
}

export interface CompletedImage extends Image{
    levelName: string;
}