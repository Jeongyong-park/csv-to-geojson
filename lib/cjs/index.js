"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sync_1 = require("csv-parse/sync");
function CSVtoGeoJSON(strCsv, options) {
    const { latitudeColumnName = "Latitude", longitudeColumnName = "Longitude" } = options || {};
    const records = (0, sync_1.parse)(strCsv, { columns: true, trim: true });
    const features = records.map((row) => {
        const feature = { type: "Feature", properties: row, geometry: { type: "Point", coordinates: [row[longitudeColumnName], row[latitudeColumnName]] } };
        return feature;
    });
    const featureCollection = { type: "FeatureCollection", features };
    return featureCollection;
}
exports.default = CSVtoGeoJSON;
//# sourceMappingURL=index.js.map