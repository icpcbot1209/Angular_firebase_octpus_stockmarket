// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'https://api.octopus.markets',
    production: false,
    hmr: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDrSxsc2Qa-VqNIS3vMQRLTyBM2DGf4k-Q',
        authDomain: 'octo-mkt.firebaseapp.com',
        projectId: 'octo-mkt',
        storageBucket: 'octo-mkt.appspot.com',
        messagingSenderId: '161745183051',
        appId: '1:161745183051:web:5dc085549a760fbcf148ce',
        measurementId: 'G-XEBP2BKKLP',
    },
    stripeKey: 'pk_test_51IGQwJEkLTSFmURGyD5HAVrOUzRxEOjjlU6aNPZ5fW2Uo7O9N532VEQkbl7vXdXAAlFWllCX5hFiZ55JfQ4sZA8t00rFh16Ltj',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
