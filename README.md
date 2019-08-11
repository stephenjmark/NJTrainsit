# NJTransit Train Time

This application makes use of the [NJ Transit DepartureVision TRACK API NJ Transit DepartureVision API](https://www.programmableweb.com/api/nj-transit-departurevision) to provide the next available times between two stations in the NJTransit network.

The app uses the HTML5 Geolocation API to auto detect the current location and auto-fill the origin station. It also uses React Autosuggest to provide station suggestions for the destination.

## Usage

To run this application, you will need `npm`, `node` and `git` installed locally.

You'll also need to register with [NJTransit developer resources](https://www.njtransit.com/mt/mt_servlet.srv?hdnPageAction=MTDevLoginTo) to gain access to their API.

#### Credentials

1. Register with NJTransit
2. Obtain username and API Key
3. Create .env file in project directory
4. Save credentials with the labels NJUSER and NJPASS

#### Port

You can specify a port number by storing it in .env under the label PORT. Otherwise, server will default to port 3000

#### Starting the application

1. Run `npm i`
2. Run `npm build-dev`
3. Run `npm start`
