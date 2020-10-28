#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import { rule, startCalcGame } from '../src/games/calc.js';

launchGame(rule, startCalcGame);
