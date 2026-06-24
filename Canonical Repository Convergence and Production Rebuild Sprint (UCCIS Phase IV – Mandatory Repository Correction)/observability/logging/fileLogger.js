const fs = require("fs");
const path = require("path");

class FileLogger {

  constructor() {

    this.logDir =
      path.join(
        __dirname,
        "../../logs"
      );

    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, {
        recursive: true
      });
    }
  }

  write(message) {

    const filePath =
      path.join(
        this.logDir,
        "runtime.log"
      );

    fs.appendFileSync(
      filePath,
      `${new Date().toISOString()} ${message}\n`
    );
  }
}

module.exports =
  new FileLogger();