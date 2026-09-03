export const PRICING_CONFIG = {
  businesses: {
    beauty: { name: 'Salon / Barber', baseCost: 40000 },
    auto: { name: 'Auto Detailing', baseCost: 45000 },
    clinic: { name: 'Medical Clinic', baseCost: 60000 },
    gym: { name: 'Gym & Fitness', baseCost: 50000 },
    cleaning: { name: 'Home Services', baseCost: 42000 },
    other: { name: 'Enterprise / Other', baseCost: 65000 },
  },

  staffTiers: {
    1: { name: '1-5 Staff', multiplier: 0 },
    2: { name: '5-20 Staff', multiplier: 15000 },
    3: { name: '20+ Staff', multiplier: 35000 },
  },

  features: {
    portal: { name: 'Dedicated Customer Portal', cost: 12000 },
    sms: { name: 'Natively Built SMS Alerts', cost: 15000 },
    payments: { name: 'Telebirr & Chapa Payment Gateways', cost: 18000 },
    mobile: { name: 'PWA / Dedicated Mobile Apps', cost: 45000 },
    analytics: { name: 'Enterprise Reporting Dashboard', cost: 12000 },
  },

  usdExchangeRate: 165, // ETB to USD
};

export interface CalculatorInputs {
  businessType: string;
  staffTier: 1 | 2 | 3;
  selectedFeatures: string[];
}

export interface CalculatorOutput {
  basePrice: number;
  staffAddition: number;
  featuresTotal: number;
  totalETB: number;
  totalUSD: number;
}

export function calculatePrice(inputs: CalculatorInputs): CalculatorOutput {
  const business = PRICING_CONFIG.businesses[inputs.businessType as keyof typeof PRICING_CONFIG.businesses];
  const staffTier = PRICING_CONFIG.staffTiers[inputs.staffTier];

  if (!business || !staffTier) {
    throw new Error('Invalid business type or staff tier');
  }

  const basePrice = business.baseCost;
  const staffAddition = staffTier.multiplier;

  let featuresTotal = 0;
  inputs.selectedFeatures.forEach(feature => {
    const featureConfig = PRICING_CONFIG.features[feature as keyof typeof PRICING_CONFIG.features];
    if (featureConfig) {
      featuresTotal += featureConfig.cost;
    }
  });

  const totalETB = basePrice + staffAddition + featuresTotal;
  const totalUSD = Math.round(totalETB / PRICING_CONFIG.usdExchangeRate);

  return {
    basePrice,
    staffAddition,
    featuresTotal,
    totalETB,
    totalUSD,
  };
}

export function formatPriceETB(amount: number): string {
  return `${amount.toLocaleString('en-US')} ETB`;
}

export function formatPriceUSD(amount: number): string {
  return `$${amount.toLocaleString('en-US')} USD`;
}
