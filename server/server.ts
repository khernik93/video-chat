import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import socketio from 'socket.io';

export default class Server {

  /**
   * @var any Express app variable
   */
  private app: any;

  /**
   * @var any Express server instance used for sockets
   */
  private server: any;

  /**
   * @var io any io instance
   */
  private io: any;

  constructor() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    this.server = http.createServer(app);
    this.app = app;
  }

  attachSocket(controller: any) {
    this.io = socketio(this.server);
    this.io.on('connection', (socket) => controller(socket));
  }

  attachController(path: string, method: string, controller: any) {
    this.app[method](path, (req, res) => controller(req, res));
  }

  start(port: number) {
    this.server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }

}
