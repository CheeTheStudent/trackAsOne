import React from 'react';
import { useRouter } from 'next/router';
import { BiDoorOpen } from 'react-icons/bi';

interface ListRoomsProps {
  room: IRoom;
}

const ListRooms: React.FC<ListRoomsProps> = ({ room }) => {
  const { push } = useRouter();

  return (
    <button
      type='button'
      onClick={() => push({ pathname: '/room', query: { id: room.id } })}
      className='card flex-between btn-ring mb-2 h-[70px] w-full text-left'
    >
      <div className='leading-5'>
        <p className='text-f9'>{room?.name}</p>
        <p className='text-sm'>
          members: {room.members?.length + 1 + room.admin.length}
        </p>
      </div>

      <BiDoorOpen className='icon' />
    </button>
  );
};

export default ListRooms;