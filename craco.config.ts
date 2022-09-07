import path from 'path';
import alias from './src/config/aliases';

const SRC = './src';
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value)
  ])
);

const resolvedJestAliases = Object.fromEntries(
  Object.entries(alias('<rootDir>/src')).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: resolvedJestAliases,
    },
  },
};