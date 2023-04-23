export type Language = "en-US" | "jp-JP";
export interface Song {
  id: string;
  title: string;
}
export interface Album {
  release_date: string;
  title: string;
  songs: Song[];
  image_url: string;
}
export interface Idol {
  name: {
    [Key in Language]: string;
  };
  group: string;
  albums: Album[];
  button_image: {
    background_color: string;
    url: string;
  };
}
