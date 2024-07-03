const { searchUsers } = require('../../api/utils/searchUsers');

module.exports = (socket) => {
  socket.on("search", async (query) => {
    try {
      const users = await searchUsers(query);
      socket.emit("searchUsers", users);
    } catch (error) {
      socket.emit("error", "Error fetching users");
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
};
