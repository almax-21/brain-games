#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import { rule, startGcdGame } from '../src/games/gcd.js';

launchGame(rule, startGcdGame);
