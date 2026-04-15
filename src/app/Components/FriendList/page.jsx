import friends from '../../data/friends.json'
import FriendCard from '../FriendCard/page';

const FriendList = () => {
    return(
        <div className='bg-base-200'>
        <div className='container mx-auto'>
            <div>
                <h2 className='text-left font-bold text-2xl'>Your Friends</h2>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-5'>
            {
                friends.map((friend, index)=>
                    <FriendCard key={index} friend={friend}></FriendCard>
                )
            }
            </div>
        </div>
        </div>
    )
};

export default FriendList;