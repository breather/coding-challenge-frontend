# Frontend coding challenge

To help last-minute bookers, we want to build a new microsite, with only one page to list breather spaces in New York City available tomorrow.

## Requirements

* For each space we want to be able to see at least:
  * the location name
  * the price for one hour.
* Bonus: We want to be able to sort and/or filter locations.
* The microsite should be deployed, ([heroku](https://www.heroku.com/) or [now](https://zeit.co/now) provides an easy deployment experience)
* You can use any technology you want. At breather, we are javascript fans and we use intensively React and nodejs.
* The challenge should be submitted as a pull-request against this repository.

## API specification

For this challenge, you can use the Breather API.

The api is hosted under `https://bapi.breather.com`

New york city id  is `8jLq7Yxb3R`

### Authentification

Every request you made to the API should be authenticated. For this, you need to provide an API key in the `x-api-key` header.

### Endpoints

The following endpoints are accessible to build the microsite.

#### Hourly Search `GET` `/locations/search/hourly{?date,timeStart,duration,cityId}`

This endpoint allows to search locations with availability for a given duration, in hours, on a given day and time (eg. on Sep 10 2017 at 8:00AM for 1 and half hours).

+ Request Parameters
  + date: `2017-09-10` (optional) - Find locations with availability on the given date. Must be set if `timeStart`, or `duration` is used.
  + timeStart: `08:00` (optional) - Find locations with availability starting at the given time.
  + duration: 1.5 (number, optional) - Find locations with availability for at least the given number of hours.
  + cityId: 8jLq7Yxb3R (optional) - Find locations in the given city. See `/cities` for the list of available cities.

+ Response 200 (application/json)
  + Attributes (array, fixed-type)
    + (object)
      + location (ShortLocation)
        + id: 2LHDcBfTAE
        + name: `Brooklyn Canteen`
        + slug: `brooklyn-canteen`
        + description: `Nestled in the Mile End’s beloved Brooklyn Canteen, this semi-private Breather is perfect for a quick catch-up with clients. Once there, you can enjoy the café’s delicious breakfast, lunch and treats, in your own space behind glass doors.`
        + address: `71 rue Saint Viateur Est, Ground Floor`
        + address1: `71 Rue Saint Viateur Est`
        + address2: ``
        + addressSuite: `900`
        + addressFloor: `Ground`
        + addressRoom: `404`
        + addressName: `Montreal`
        + addressCity: `Montreal`
        + cityId: `8jLq7Yxb3R`
        + currencyCode: `CAD`
        + timezone: `America/Montreal`
        + lnglat (array, fixed-type)
            + `-73.598066568375` (number)
            + `45.526952961749` (number)
        + amenities (array, fixed-type)
            + `whiteboard`
            + `air-conditioning`
            + `wifi`
            + `ensuite-restroom`
            + `mirror`
            + `phone-charger`
        + neighborhoods (array, fixed-type)
            + `Le Plateau-Mont-Royal`
            + `Mile-End`
        + images (array, fixed-type)
            + (object)
                + imageType (enum)
                    + `loc-image`
                    + `floor-plan`
                + imageDescription (optional)
                + h: 3744 (number)
                + w: 5616 (number)
                + url: `https://res.cloudinary.com/breather-com/image/upload/c_fit,f_auto,h_800,q_auto,w_1200/v1/locations/p/336-w-37-1510-2_1459439755016.jpg`
        + links (object)
            + deeplink: `https://breather.com/locations/montreal/brooklyn-cafe` (string)
      + availability (array, fixed-type)
        + (object)
          + dateLocal: `2017-12-03` (string)
          + prices (object)
            + hourlyPrice: 3000 (number)
            + dailyPrice: 30000 (number)
          + blocks (array, fixed-type)
              + (object)
                + startTimeLocal: 08:00 (string)
                + endTimeLocal: 10:00 (string)
                + totalPrice: 6000 (number)
                + discountPercent: 25 (number)
      + score: 1.333 (number, optional) - The score of the search results
```
