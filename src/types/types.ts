export interface IBlog {
  _id: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  author: { first_name: string; last_name: string; _id: string; email: string };
  state: "draft" | "published";
  read_count: number;
  reading_time: number;
  likes: number;
  likedBy: string[];
  timestamp: Date;
  updatedAt: Date;
  createdAt: Date;
  comments: Icomment[];
}

export interface Icomment {
  content: string;
  author: { first_name: string; last_name: string; _id: string; email: string };
  createdAt: Date;
  _id: string;
}
