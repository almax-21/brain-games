#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import { rule, startProgressionGame } from '../src/games/progression.js';

launchGame(rule, startProgressionGame);
