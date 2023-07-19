function maxAdditionalDiners(N, K, M, S) {
  S.sort((a, b) => a - b);

  let newDiners = 0;
  const spaceNeeded = K + 1;

  // Check seats to the left
  const leftSeats = S[0] - 1;
  newDiners += Math.floor(leftSeats / spaceNeeded);

  // Check seats to the right
  const rightSeats = N - S[M - 1];
  newDiners += Math.floor(rightSeats / spaceNeeded);

  // Find open seating between existing diners
  const firstDiner = 2 * K + 1;
  for (let i = 0; i < M - 1; i++) {
    const seatsBetween = S[i + 1] - S[i] - 1;
    if (seatsBetween >= firstDiner) {
      newDiners++;
      let remainingSeats = seatsBetween - firstDiner;
      if (remainingSeats >= spaceNeeded) {
        newDiners += Math.floor(remainingSeats / spaceNeeded);
      }
    }
  }

  return newDiners;
}

function getArtisticPhotographCount(N, C, X, Y) {
  // Write your code here
  let count = 0;

  for (let actor = 1; actor < N - 1; actor++) {
    if (C.charAt(actor) != 'A') continue;

    for (
      let photographer = actor - 1;
      photographer >= Math.max(0, actor - Y);
      photographer--
    ) {
      if (C.charAt(photographer) == 'P') {
        for (
          let backdrop = actor + 1;
          backdrop <= Math.min(N - 1, actor + Y);
          backdrop++
        ) {
          if (C.charAt(backdrop) == 'B') {
            let photographerToActor = actor - photographer;
            let actorToBackdrop = backdrop - actor;

            if (
              photographerToActor >= X &&
              photographerToActor <= Y &&
              actorToBackdrop >= X &&
              actorToBackdrop <= Y
            ) {
              count++;
            }
          }
        }
      } else if (C.charAt(photographer) == 'B') {
        for (
          let backdrop = actor + 1;
          backdrop <= Math.min(N - 1, actor + Y);
          backdrop++
        ) {
          if (C.charAt(backdrop) == 'P') {
            let photographerToActor = actor - photographer;
            let actorToBackdrop = backdrop - actor;

            if (
              photographerToActor >= X &&
              photographerToActor <= Y &&
              actorToBackdrop >= X &&
              actorToBackdrop <= Y
            ) {
              count++;
            }
          }
        }
      }
    }
  }

  return count;
}
