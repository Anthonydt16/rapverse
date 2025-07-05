export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  postContent: {
    caption?: string;
    image_url?: string[];
  } | null;
  pinned: boolean;
  urlPost: string;
};
