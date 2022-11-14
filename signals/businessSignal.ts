import { signal } from '@preact/signals-react';
import { BusinessInfo } from '../types/business';

export const businessInfo = signal<BusinessInfo | undefined>(undefined);

export const setBusinessInfo = (info: BusinessInfo) => {
	businessInfo.value = info;
};
