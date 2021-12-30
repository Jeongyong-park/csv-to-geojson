import * as fs from 'fs'
import path from 'path';
import { parse } from 'csv-parse/sync';

import { Feature, FeatureCollection, GeoJsonObject } from 'geojson';

interface CSVtoGeoJSONOptions {
    latitudeColumnName?: string;
    longitudeColumnName?: string;
}
type RecordType = { [x: string]: number | string; }

function CSVtoGeoJSON(strCsv: string, options?: CSVtoGeoJSONOptions): GeoJsonObject {
    const { latitudeColumnName = "Latitude", longitudeColumnName = "Longitude" } = options || {};

    const records: RecordType[] = parse(strCsv, { columns: true, trim: true });

    const features: Feature[] = records.map((row: { [x: string]: number | string; }) => {
        const feature: Feature = { type: "Feature", properties: row, geometry: { type: "Point", coordinates: [row[longitudeColumnName] as number, row[latitudeColumnName] as number] } };
        return feature;
    })

    const featureCollection: FeatureCollection = { type: "FeatureCollection", features };
    return featureCollection as GeoJsonObject;
}

export default CSVtoGeoJSON;