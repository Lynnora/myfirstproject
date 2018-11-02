const jsontocsv = require('json2csv');
const csvtojson = require('csvtojson');
const fs = require('fs');

class Router {
  constructor(app) {
    this.app = app;
    this.csvPath = `${__dirname}/data.csv`;
    this.csvOptions = {
      fields: [
        'fontname',
        'foundry',
      ]
    };
  }

  /**
   * Register the API endpoints.
   */
  register() {
    this.app.get('/view', this.viewAllData.bind(this));
    this.app.post('/new', this.storeNewRow.bind(this));
  }

  /**
   * Store a new row.
   * @param {Object} request
   *   The request object.
   * @param {Object} response
   *   The response object.
   */
  storeNewRow(request, response) {
    const data = jsontocsv.parse(request.body, this.csvOptions);
    fs.appendFileSync(this.csvPath, data, 'utf8');
    response.send('Data saved!');
  }

  /**
   * Return all of the data.
   * @param {Object} request
   *   The request object.
   * @param {Object} response
   *   The response object.
   */
  viewAllData(request, response) {
    return csvtojson().fromFile(this.csvPath).then((data) => {
      response.send(data);
    });
  }
}

module.exports = Router;
