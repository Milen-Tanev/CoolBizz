let Drone = require('../models/drone-model').Drone;

const someDrone = new Drone({
    name: 'FlyFlyHigh',
    description: 'this is the masterpiece drone',
    serviceSupported: 'Fire Response',
    pricePerDay: 120,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 1200,
    altitudeMin: 20,
    manufacturer: 'MegaDroneManufLTD',
    latitude: 23.2298,
    longitude: 45.1258,
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
    }
});

const someSecondDrone = new Drone({
    name: 'MyDrone XF 44',
    description: 'the tinies tiny drone',
    serviceSupported: 'High-resolution photo & video',
    pricePerDay: 100,
    startRentDate: new Date(),
    endRentDate: new Date(),
    realtimeNavdata: true,
    altitudeMax: 300,
    altitudeMin: 25,
    manufacturer: 'CinDRFuture',
    latitude: 73.2298,
    longitude: 55.1258,
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
    }
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
    latitude: 33.2298,
    longitude: 45.1258,
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
    }
});

let dronesArr = [someDrone, someSecondDrone, someThirdDrone];

dronesArr.forEach(dr => dr.save((err, entry, numAffected) => {
    const repetitions = 20;
    Array(repetitions).join('-');
    console.log(`${numAffected} data entiry added`);
    console.log(entry.name + ' created');
    Array(repetitions).join('-');
    if (err) {
        console.log(`Oops Error found ${err}`);
    }
}));