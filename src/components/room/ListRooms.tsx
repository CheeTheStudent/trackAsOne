import React from 'react'
import { useRouter } from 'next/router'
import { BiDoorOpen } from 'react-icons/bi'

export const ListRooms: React.FC<ListRoomsProps> = ({ room }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/rooms/${room.roomID}`)}
      className='card flex-between h-[70px] mb-2 btnEffect w-full text-left'
    >
      <div className='leading-5'>
        <p className='text-f9'>{room.name}</p>
        <p className='text-sm'>members: {room.members.length + 1}</p>
      </div>

      <BiDoorOpen className='icon' />
    </button>
  )
}