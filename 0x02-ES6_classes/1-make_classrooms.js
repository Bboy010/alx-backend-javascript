import ClassRoom from './0-classroom.js';

/** short code**/
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));

}
