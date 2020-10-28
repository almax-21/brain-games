#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import { rule, startPrimeGame } from '../src/games/prime.js';

launchGame(rule, startPrimeGame);
