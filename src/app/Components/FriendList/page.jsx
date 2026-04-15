import friends from '../../data/friends.json'
import FriendCard from '../FriendCard/page';

const FriendList = () => {
    return(
        <>
        
        <div className='bg-base-200 min-h-screen p-5'>
        <div className='container mx-auto'>
            <div>
                <h2 className='text-left font-bold text-2xl'>Your Friends</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 mt-5'>
            {
                friends.map((friend, index)=>
                    <FriendCard key={index} friend={friend}></FriendCard>
                )
            }
            </div>
        </div>
        </div>
        </>
    )
};

export default FriendList;