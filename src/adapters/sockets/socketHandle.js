const sessionManager = require('./sessionManager')

const catchAsyncAdapter = require('../../utils/catchAsyncAdapter')

const handleController = require("../controllers/handleController")
const { Server } = require("socket.io");



class SocketInputAdapter {
  static instance = undefined
  constructor(server) {

    if (!SocketInputAdapter.instance) {
      SocketInputAdapter.instance = this;
    }

    this.io = new Server(server);
    this.sessionManager=sessionManager(this.io)
    this.catchAsyncAdapter = catchAsyncAdapter.bind(this)

    this.handleSocketEvents()
  }

  handleSocketEvents() {


    this.io.on('connection', async (socket) => {

      await this.catchAsyncAdapter(handleController.clientAuth,true,{socket})
      this.handleMessages(socket)

      
    });
  }
  handleMessages(socket){
    socket.on('conversationMessages', () => {
      
    });
  }
  static getInstance(server){
    if(!SocketInputAdapter.instance && server){
      SocketInputAdapter.instance=new SocketInputAdapter(server)
    }
    return SocketInputAdapter.instance
  }
}

module.exports = SocketInputAdapter.getInstance;
