import React, { useState, useEffect } from 'react';

export interface OrvexCheckoutProps {
    invoiceId: string;
    onSuccess?: (data: any) => void;
    onCancel?: () => void;
    className?: string;
}

export const OrvexCheckout: React.FC<OrvexCheckoutProps> = ({
    invoiceId,
    onSuccess,
    onCancel,
    className = '',
}) => {
    const [isLoading, setIsLoading] = useState(true);

    // Placeholder for real integration (usually an iframe or a popup)
    const checkoutUrl = `https://checkout.orvexpay.com/invoice/${invoiceId}`;

    return (
        <div
            className={`orvex-checkout-container ${className}`}
            style={{
                width: '100%',
                minHeight: '600px',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(0,0,0,0.2)',
                position: 'relative'
            }}
        >
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 10
                }}>
                    <div className="loader" style={{
                        border: '4px solid rgba(255,255,255,0.1)',
                        borderTop: '4px solid #3b82f6',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        animation: 'spin 1s linear infinite'
                    }} />
                </div>
            )}

            <iframe
                src={checkoutUrl}
                style={{ width: '100%', height: '100%', border: 'none', position: 'absolute' }}
                onLoad={() => setIsLoading(false)}
                title="OrvexPay Checkout"
            />

            <style>{`
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};
