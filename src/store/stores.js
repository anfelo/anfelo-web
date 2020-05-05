import { writable } from 'svelte/store';
import * as fromLocalStorage from '../services/localStorage';

export const theme = writable(fromLocalStorage.loadEntry('theme') || 'light-theme');
