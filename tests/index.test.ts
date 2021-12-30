import fs from "fs";
import path from "path";
import CsvToGeojson from "../src";

var assert = require('assert');

describe('Test Suite 1', function () {
  it('Test 1', function () {

    const csvfile = path.resolve(__dirname, './data/repeater.csv');
    const csvFs = fs.readFileSync(csvfile, 'utf8');
    const geojson = CsvToGeojson(csvFs.toString())

    fs.writeFileSync(path.resolve(__dirname, './data/repeater-result.geojson'), JSON.stringify(geojson, null, 2));

  })
})