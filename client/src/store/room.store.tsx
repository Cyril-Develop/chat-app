import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RoomState } from "@/types/store";
import { UserInfos } from "@/types/user";

export const useRoomStore = create<RoomState>()(
  persist(
    (set) => ({
      room: null,
      setRoom: (room) => set({ room }),

      usersInRoom: [],
      setUsersInRoom: (users: UserInfos[]) => set({ usersInRoom: users }),

      updateUserInRoom: (updatedUser: Partial<UserInfos> & { id: number }) =>
        set((state) => ({
          usersInRoom: state.usersInRoom.map((user) =>
            user.id === updatedUser.id ? { ...user, ...updatedUser } : user
          ),
        })),
    }),
    {
      name: "room-storage",
      // Stocke uniquement l'état de la salle dans localStorage (l'identifiant et le nom de la salle)
      partialize: (state) => ({
        room: state.room,
      }),
    }
  )
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { RoomState } from "@/types/store";
// import { UserInfos } from "@/types/user";
// import { getRooms } from "@/services/Chat";

// export const useRoomStore = create<RoomState>()(
//   persist(
//     (set) => ({
//       room: null,
//       setRoom: (room) => set({ room }),

//       rooms: [],
//       setRooms: (rooms) => set({ rooms }),

//       // Gérer les utilisateurs dans la room
//       usersInRoom: [],
//       setUsersInRoom: (users: UserInfos[]) => set({ usersInRoom: users }),

//       // Mettre à jour un utilisateur dans la room
//       updateUserInRoom: (updatedUser: Partial<UserInfos> & { id: number }) =>
//         set((state) => ({
//           usersInRoom: state.usersInRoom.map((user) =>
//             user.id === updatedUser.id ? { ...user, ...updatedUser } : user
//           ),
//         })),

//       // Mettre à jour la description d'une room en mémoire
//       updateRoomDescription: (roomId: number, description: string) =>
//         set((state) => ({
//           rooms: state.rooms.map((room) =>
//             room.id === roomId ? { ...room, description } : room
//           ),
//         })),

//       // Initialiser les rooms en récupérant toutes les rooms depuis le serveur
//       initializeRooms: async () => {
//         try {
//           const rooms = await getRooms(); // La fonction fetchRooms récupère les rooms depuis ton serveur
//           set({ rooms });
//         } catch (error) {
//           console.error("Erreur lors de la récupération des rooms :", error);
//           set({ rooms: [] }); // Si l'appel échoue, on garde un état vide
//         }
//       },
//     }),
//     {
//       // Stocke uniquement la room active dans le localStorage
//       name: "room-storage",
//       partialize: (state) => ({
//         room: state.room,
//       }),
//     }
//   )
// );
