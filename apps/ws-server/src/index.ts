// import { WebSocketServer } from "ws";
// import  {client}  from "@repo/db/client";

// const server = new WebSocketServer({
//     port: 3001
// });

// server.on("connection", async (socket) => {
//     client.user.create({
//         data: {
//             username: Math.random().toString(),
//             password: Math.random().toString()
//         }
//     })
//     socket.send("Hi there you are connected to the server");
// })
import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", async (socket) => {
  try {
    // Example DB insert
    const user = await client.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    socket.send(`Connected! New user created with id ${user.id}`);
  } catch (err) {
    console.error("DB error:", err);
    socket.send("Error saving user in DB");
  }

  socket.on("message", (message) => {
    console.log("Received from client:", message.toString());
    socket.send("Message received!");
  });

  socket.on("close", () => {
    console.log("Socket disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:3001");