#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import { rule, startEvenGame } from '../src/games/even.js';

launchGame(rule, startEvenGame);
