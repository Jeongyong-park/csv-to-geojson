import { GeoJsonObject } from 'geojson';
interface CSVtoGeoJSONOptions {
    latitudeColumnName?: string;
    longitudeColumnName?: string;
}
declare function CSVtoGeoJSON(strCsv: string, options?: CSVtoGeoJSONOptions): GeoJsonObject;
export default CSVtoGeoJSON;
//# sourceMappingURL=index.d.ts.map