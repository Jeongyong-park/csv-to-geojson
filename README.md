[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FJeongyong-park%2Fcsv-geojson-conv.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FJeongyong-park%2Fcsv-geojson-conv?ref=badge_shield)

## csv-geojson-conv

csv-geojson-conv is module for very easy to use for convert from CSV to GeoJSON.

no more spend your time 

## install

``` sh
# via npm
npm install csv-geojson-conv

# via yarn
yarn add csv-geojson-conv
```

## HOW TO USE

### via browser fetch method

```js
import csvToGeojson from 'csv-geojson-conv';
//or
const csvToGeojson = require('csv-geojson-conv');

fetch('data/repeater.csv').then(async res => {
    const csvdata = await res.text();
    if (csvdata) {
        const geojson = csvToGeojson(csvdata) 
    }
});
```

this is sample csv file.
```csv
Latitude,Longitude,name,point,notes
37.4355672,126.9388092,Seoul-1,99.9,-
35.0819546,129.0552017,Busan-2,88.8,
```

### if column names are different like that in your CSV.

you can use with this options

```js
const geojson = csvToGeojson(csvdata, { latitudeColumnName: 'lat', longitudeColumnName: 'lon' })
```

## LICENSE

Licensed [MIT](https://github.com/Jeongyong-park/csv-geojson-convmocha/blob/master/LICENSE)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FJeongyong-park%2Fcsv-geojson-conv.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FJeongyong-park%2Fcsv-geojson-conv?ref=badge_large)
