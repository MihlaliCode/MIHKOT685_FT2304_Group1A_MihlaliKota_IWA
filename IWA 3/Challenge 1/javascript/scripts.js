// configuration.js
const company = 'ACME Inc.';
const year = 2022;

// scripts.js
import { company } from 'configuration';
import { year } from 'configuration';

const message = `© ${company} (${year})`;
document.querySelector('footer').textContent = message;
