import React from 'react';

export interface OrvexPayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
}

/**
 * Professional Payment Button for OrvexPay.
 * Features glassmorphism, smooth animations, and native loading states.
 */
export const OrvexPayButton: React.FC<OrvexPayButtonProps> = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    children,
    className = '',
    style,
    disabled,
    ...props
}) => {
    const getBaseStyles = (): React.CSSProperties => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        borderRadius: '0.75rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: (disabled || isLoading) ? 'not-allowed' : 'pointer',
        opacity: (disabled || isLoading) ? 0.6 : 1,
        gap: '0.625rem',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        border: '1px solid transparent',
        outline: 'none',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
        letterSpacing: '-0.01em',
        ...style
    });

    const getVariantStyles = (v: string): React.CSSProperties => {
        switch (v) {
            case 'primary':
                return {
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2), 0 4px 6px -4px rgba(59, 130, 246, 0.2)',
                };
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                };
            case 'glass':
                return {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                };
            default:
                return {};
        }
    };

    const getSizeStyles = (s: string): React.CSSProperties => {
        switch (s) {
            case 'sm': return { padding: '0.5rem 1rem', fontSize: '0.875rem' };
            case 'lg': return { padding: '0.875rem 1.75rem', fontSize: '1rem' };
            case 'xl': return { padding: '1rem 2rem', fontSize: '1.125rem' };
            default: return { padding: '0.625rem 1.25rem', fontSize: '0.938rem' };
        }
    };

    const currentStyles = {
        ...getBaseStyles(),
        ...getVariantStyles(variant),
        ...getSizeStyles(size),
    };

    return (
        <button
            style={currentStyles}
            disabled={disabled || isLoading}
            className={`orvex-pay-button ${className}`}
            aria-busy={isLoading}
            title={isLoading ? 'Processing...' : (props.title || 'Pay with OrvexPay')}
            {...props}
        >
            {isLoading && (
                <svg
                    style={{
                        animation: 'orvex-spin 1s linear infinite',
                        width: '1.25rem',
                        height: '1.25rem',
                        marginRight: '0.25rem'
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path
                        style={{ opacity: 0.8 }}
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {!isLoading && leftIcon && (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    {leftIcon}
                </span>
            )}

            <span style={{ position: 'relative', zIndex: 1 }}>
                {children || 'Pay with OrvexPay'}
            </span>

            <style>{`
                @keyframes orvex-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .orvex-pay-button:hover:not(:disabled) { 
                    transform: translateY(-2px); 
                    filter: brightness(1.15); 
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
                }
                .orvex-pay-button:active:not(:disabled) { 
                    transform: translateY(0px); 
                    filter: brightness(0.95);
                }
            `}</style>
        </button>
    );
};
