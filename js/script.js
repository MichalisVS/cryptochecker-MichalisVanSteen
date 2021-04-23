'use strict';

import CoinFetcher from './CoinFetcher.js';
import CoinWatcher from './CoinWatcher.js';

const coinFetcher = new CoinFetcher();
const watcherBTC = new CoinWatcher('BTC');