'use strict';

class CoinWatcher {
    constructor(coin, fetcher) {
        this.coin = coin;
        fetcher.subscribe(this);
    }
    notify(coin, rate) {
        alert(`${coin} is going down: ${rate}`);
    }
}

export default CoinWatcher;