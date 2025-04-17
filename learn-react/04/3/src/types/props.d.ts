interface ProfileCardProps {
  bgImg: string;
  userImg: string;
  username: stirng;
  instaID: string;
  isFollowing: boolean;
  changeColor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
