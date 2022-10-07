import Commerce from '@chec/commerce.js';

// Tworzymy nową instancje która bedzie naszym sklepem
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
