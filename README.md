# OrvexPay React UI Kit

The official React component library for OrvexPay. Effortlessly integrate crypto payment flows into your React or Next.js applications.

## Installation

```bash
npm install orvex-pay-react orvex-pay
```

## Usage

### Payment Button

```tsx
import { OrvexPayButton } from 'orvex-pay-react';

function App() {
  return (
    <OrvexPayButton 
        variant="glass" 
        size="lg"
        onClick={() => console.log('Proceeding to payment...')}
    >
      Buy Now
    </OrvexPayButton>
  );
}
```

### Embeddable Checkout

```tsx
import { OrvexCheckout } from 'orvex-pay-react';

function CheckoutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <OrvexCheckout invoiceId="INV_12345" />
    </div>
  );
}
```

## Features

- **TypeScript Support**: Full autocomplete and type-safety.
- **Glassmorphism Design**: Modern, premium look out of the box.
- **Lightweight**: Zero logic bloat, focuses on UI.
- **Customizable**: Pass standard HTML button props or custom variants.
