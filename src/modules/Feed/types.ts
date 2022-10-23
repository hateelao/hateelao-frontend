export interface PostDTO {
  postId: string;
  title: string;
  partySize: number;
  users: UserDTO[];
  pendingUsers: UserDTO[];
  owner: UserDTO;
}
interface UserDTO {
  userId: string;
  displayName: string;
  photoURL: string;
  firebaseId: string;
}
