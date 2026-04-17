import ListOfFriends from "@/app/data/friends.json";
import Banner from "./Components/Banner/page";
import FriendList from "./Components/FriendList/page";
import ShortSummary from "./Components/Short-summary/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Banner friends={ListOfFriends} />
        <ShortSummary friends={ListOfFriends} />
      </div>

      <div className="divider container mx-auto"></div>

      <FriendList friends={ListOfFriends} />
    </>
  );
}