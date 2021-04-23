'use strict';

import CoinFetcher from './CoinFetcher.js';
import CoinWatcher from './CoinWatcher.js';

const coinFetcher = new CoinFetcher();
const watcherBTC = new CoinWatcher('BTC', coinFetcher);
const watcherETH = new CoinWatcher('ETH', coinFetcher);