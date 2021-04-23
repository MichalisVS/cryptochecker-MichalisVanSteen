'use strict';

const API = "http://api.coinlayer.com/api/live?access_key=2f5eb507c8cdd0cdbb1f921f34f23e28";

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
            //console.log(coin, newRates[coin]);
            if(this.rates[coin]) {
                //Check if new rate is lower then old one
                if(newRates[coin] < this.rates[coin]) {
                    console.log('This is going down:', coin);
                    //Notify the watchers
                    this.notifyWatchers(coin, newRates[coin]);
                }
            }
        }
        this.rates = newRates;
    }

    notifyWatchers(coin, rate) {
        this.watchers.foreach(watcher => {
            if(watcher.coin == coin) {
                watcher.notify(coin, rate);
            }
        });
    }

    subscribe(watcher) {
        this.watchers.push(watcher);
        console.log(this.watchers);
    }
}

export default CoinFetcher;