const express = require('express');
const chalk = require('chalk');

class Server {
  constructor() {
    this.port = 3000;
    this.host = '127.0.0.1';
    this.app = express();
    this.app.use(express.json());
  }

  /**
   * Start the server.
   */
  start() {
    this.app.use(express.json());
    this.app.listen(this.port, this.host).on('error', (err) => {
      console.log(chalk.red(err));
    });
    console.log(chalk.green(`Server listening on ${this.host}:${this.port}`));
  }
}

module.exports = Server;