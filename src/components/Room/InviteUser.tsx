import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineIdcard } from 'react-icons/ai';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/config/firebase';
import { Header, Input } from '@/components';
import { RoomMenu } from '@/components/Room';
import { useAuth } from '@/contexts/AuthContext';
import { useRoomContext } from '@/contexts/RoomContext';

const RoomInvite = () => {
  const [invUserTag, setUserTag] = useState<string>('');

  const { data } = useAuth();
  const { room, roomId } = useRoomContext();

  const inviteUser = async () => {
    setUserTag('');

    if (invUserTag === '') {
      toast.error('example → user:nTWS_');
    } else {
      const userToInv = await getDoc(doc(db, 'users', invUserTag));

      if (!userToInv.exists()) {
        toast.error('user tag could not be found');
      } else if (invUserTag === data.id) {
        toast.error('you are already in the room');
      } else if (room?.members?.includes(invUserTag)) {
        toast.error('user is already in the room');
      } else {
        toast.promise(
          updateDoc(doc(db, `users/${userToInv.id}`), {
            invites: arrayUnion(roomId),
          }),
          {
            loading: 'inviting user...',
            success: 'user invited!',
            error: 'could not invite user.',
          }
        );
      }
    }
  };

  return (
    <>
      <RoomMenu room={room!} />
      <Header title='Invite a User' />
      <form
        spellCheck='false'
        className='flex w-full flex-col items-center justify-center'
      >
        <Input
          onChange={(e) => setUserTag(e.target.value)}
          value={invUserTag}
          placeholder='enter user tag'
          minLength={10}
          maxLength={20}
        />

        <div className='mx-auto mt-2 inline-block'>
          <button onClick={inviteUser} className='btn btn-ring' type='button'>
            <p className='mr-4'>invite user</p>
            <AiOutlineIdcard className='icon' />
          </button>
        </div>
      </form>
    </>
  );
};

export default RoomInvite;