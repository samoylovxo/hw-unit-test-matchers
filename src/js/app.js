'use strict';

export default function sortPlayer(players) {
  return players.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }

    if (a.health > b.health) {
      return -1;
    }

    return 0;
  });
}
