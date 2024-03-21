export interface User {
  name: string;
  avatar: string;
}

export interface ChatData {
  id: number;
  name: string;
  avatar: string;
  nickName: string;
  day: string;
  detailChat: DetailChat[];
}

export interface DetailChat {
  content: string;
  time: string;
  newContent: boolean;
  type: boolean;
}
