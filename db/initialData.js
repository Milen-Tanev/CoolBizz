let Drone = require('../models/drone-model').Drone;

const someDrone = new Drone({
    name: 'FlyFlyHigh',
    description: 'this is the masterpiece drone',
    serviceSupported: [
        'Fire Response',
        'Supply Deliveries'
    ],
    pricePerDay: 120,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 1200,
    altitudeMin: 20,
    manufacturer: 'MegaDroneManufLTD',
    latitude: 42.6977,
    longitude: 23.3219,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SuperCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    thermalServiceData: {
        sensorType: 'Th3',
        nuberOfSensors: 2
    },
    deliveryServiceData: {
        carryLoad: 12
    },
    fireServiceData: {
        typeOfExtinguisher: 'Powder',
        quantity: 1
    },
    searchAndRescueService: {
        sensorsTouchType: 'ax34',
        microphoneType: 'tinMic',
        speakersType: 'vox',
        firstAidKitAvailable: true
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'https://www.wired.com/images_blogs/dangerroom/2012/03/x56a-660x338.jpg'
});

const someSecondDrone = new Drone({
    name: 'MyDrone XF 44',
    description: 'the tinies tiny drone',
    serviceSupported: [
        'High-resolution photo & video',
        'Search and Rescue Operations'
    ],
    pricePerDay: 100,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 300,
    altitudeMin: 25,
    manufacturer: 'CinDRFuture',
    latitude: 42.6903,
    longitude: 23.4049,
    maxBitrate: 50,
    videoEnabled: true,
    videoCodec: 'SuperXXCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDree',
    wifiRate: 'strongVF55',
    deliveryServiceData: {
        carryLoad: 12
    },
    fireServiceData: {
        typeOfExtinguisher: 'Powder',
        quantity: 1
    },
    img: 'http://www.examinechina.com/blog/wp-content/uploads/2014/05/drone.jpg'
});

const someThirdDrone = new Drone({
    name: 'TekMeToMoon',
    description: 'noLogo futuristic',
    serviceSupported: 'Logistics Support',
    pricePerDay: 220,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 800,
    altitudeMin: 20,
    manufacturer: 'DinDongLTD',
    latitude: 42.6499,
    longitude: 23.3945,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SupersssCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    deliveryServiceData: {
        carryLoad: 12
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'http://media.cmgdigital.com/shared/lt/lt_cache/thumbnail/960/img/photos/2013/12/05/d4/72/Amazone-Drone-Delivery.JPEG.jpg'
});

const someFourthDrone = new Drone({
    name: 'UniqueCargo',
    description: 'heavyLOAD',
    serviceSupported: 'Logistics Support',
    pricePerDay: 220,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 800,
    altitudeMin: 20,
    manufacturer: 'DinddddwongLTD',
    latitude: 42.6935,
    longitude: 23.3282,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SupersssCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    deliveryServiceData: {
        carryLoad: 12
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'http://mhlnews.com/site-files/mhlnews.com/files/imagecache/galleryformatter_slide_penton/gallery_images/Drone-Cargo-1.jpg?1442500461'
});

const someFifthDrone = new Drone({
    name: 'everywhereMil23sd4',
    description: 'CBREspecial',
    serviceSupported: 'Chemical, Biological, Radiological, Nuclear, or Explosive(CBRNE) Event',
    pricePerDay: 220,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 800,
    altitudeMin: 20,
    manufacturer: 'MilitarySecretSec',
    latitude: 42.3282,
    longitude: 23.3482,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SupersssCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    deliveryServiceData: {
        carryLoad: 12
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-44sQZz6TpI3Y0JRKG83YKeOya6goiAOuIez1MAGx0WKst97Rg'
});

const someSixththDrone = new Drone({
    name: 'ther34Xs',
    description: 'Therone',
    serviceSupported: 'Thermal inspection via sensors',
    pricePerDay: 220,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 800,
    altitudeMin: 20,
    manufacturer: 'sensorCo3002',
    latitude: 42.3182,
    longitude: 23.1258,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SupersssCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    deliveryServiceData: {
        carryLoad: 12
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKp3lvvc0GH-pp8jJuhR2AMTJwkDMpRXPzBIM-wPz31GfktImf'
});

const someSeventhDrone = new Drone({
    name: 'Sprinkler',
    description: 'FireArm',
    serviceSupported: 'Fire Response',
    pricePerDay: 220,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 800,
    altitudeMin: 20,
    manufacturer: 'sensorCo3002',
    latitude: 42.4282,
    longitude: 23.5282,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SupersssCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    deliveryServiceData: {
        carryLoad: 12
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'http://defense-update.com/images/locaas-2.jpg'
});

const someEightDrone = new Drone({
    name: 'RescuerEverGreen',
    description: 'critcally fast rescue ops',
    serviceSupported: 'Search and Rescue Operations',
    pricePerDay: 220,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 800,
    altitudeMin: 20,
    manufacturer: 'sensorCo3002',
    latitude: 42.6282,
    longitude: 23.7758,
    maxBitrate: 20,
    videoEnabled: true,
    videoCodec: 'SupersssCodec',
    videoOnUsb: true,
    VideoSlic: true,
    wifiMode: 'permDr',
    wifiRate: 'strongV',
    deliveryServiceData: {
        carryLoad: 12
    },
    logisticsSupportService: {
        distanceToEmitter: 0.5,
        canFlyWithTeam: true,
        canLeadTeam: true
    },
    img: 'http://1.bp.blogspot.com/-umsyIYBXXOU/Ve55bFv916I/AAAAAAAAWZs/EhZzWcq-nm4/s1600/Mini_Drone.jpg'
});


let dronesArr = [someDrone, someSecondDrone, someThirdDrone, someFourthDrone, someFifthDrone, someSixththDrone, someSeventhDrone, someEightDrone];

dronesArr.forEach(dr => dr.save((err, entry, numAffected) => {

    console.log('--------------');

    console.log(`${numAffected} data entry added`);
    console.log(entry.name + ' created');

    if (err) {
        console.log(`Oops Error found: ${err}`);
    }
}));