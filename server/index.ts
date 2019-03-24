import { JoinRoomController } from './controllers/joinRoom.controller';
import Server from './server';
import { HttpMethod } from './utils/http.constants';

const server = new Server();

const joinRoomController = new JoinRoomController();
server.attachController(
  '/api/joinRoom', 
  HttpMethod.post,
  joinRoomController.handler.bind(joinRoomController)
);

server.start(3011);
