'use strict';

const API = "";

class CoinFetcher{
    constructor() {
        this.rates = {};
        this.watchers = [];

        this.fetch();
        setInterval(this.fetch.bind(this), 10000);
    }

    async fetch() {
        console.log('FETCH ...');
        const resp = await fetch(API);
        const json = await resp.json();

        //console.log(this);

        console.log(json.rates);
        this.checkRates(json.rates);
    }

    checkRates(newRates) {
        for(const coin in  newRates) {
            console.log(coin, newRates[coin]);
            if(this.rates[coin]) {
                //Check if new rate is lower then old one
                if(newRates[coin] < this.rates[coin]) {
                    console.log('This is going down:', coin);
                    //Notify the watchers
                }
            }
        }
    }

    subscribe(watcher) {
        console.log(watcher);
    }
}

export default CoinFetcher;