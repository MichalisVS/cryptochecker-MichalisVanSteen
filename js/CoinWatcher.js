'use strict';

class CoinWatcher {
    constructor(coin, fetcher) {
        this.coin = coin;
        fetcher.subscribe(this);
    }
}

export default CoinWatcher;