// ✅ NO API / NO BACKEND VERSION

/**
 * Fetch invitation details
 */
export async function fetchInvitation(uid) {
  return {
    bride: "Srinu",           // ✅ CHANGE YOUR NAME HERE
    groom: "Eswari",    // ✅ CHANGE PARTNER NAME
    date: "24 June 2026", // ✅ CHANGE DATE
    location: "Perupalem",    // ✅ CHANGE LOCATION
    message: "You are invited to our wedding!"
  };
}

/**
 * Fetch all wishes (static for now)
 */
export async function fetchWishes(uid) {
  return [
    {
      id: 1,
      name: "Friend 1",
      message: "Congratulations!",
      attendance: "yes"
    },
    {
      id: 2,
      name: "Friend 2",
      message: "Happy married life!",
      attendance: "no"
    }
  ];
}

/**
 * Create a new wish (console only)
 */
export async function createWish(uid, wishData) {
  console.log("New wish submitted:", wishData);
  return { success: true };
}

/**
 * Check if guest already submitted
 */
export async function checkWishSubmitted(uid, name) {
  return { hasSubmitted: false };
}

/**
 * Delete wish (dummy)
 */
export async function deleteWish(uid, wishId) {
  return { success: true };
}

/**
 * Stats (static)
 */
export async function fetchAttendanceStats(uid) {
  return {
    total: 2,
    attending: 1,
    notAttending: 1
  };
}