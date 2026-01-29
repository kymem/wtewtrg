import React from 'react';
import { PaymentMethodType, PAYMENT_METHODS } from '../lib/paymentMethodConfig';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethodType;
  onMethodChange: (method: PaymentMethodType) => void;
  currency?: string;
}

const methodImages = {
  card: 'https://f003.backblazeb2.com/file/houzing/admin1images/a+(2).png',
  mobile_money: {
    main: 'https://f003.backblazeb2.com/file/houzing/admin1images/a+(4).png',
    mpesa: 'https://f003.backblazeb2.com/file/houzing/admin1images/a+(1).png',
  },
  express_pay: {
    paypal: 'https://f003.backblazeb2.com/file/houzing/admin1images/b+(1).png',
    googlePay: 'https://f003.backblazeb2.com/file/houzing/admin1images/b+(3).png',
    applePay: 'https://f003.backblazeb2.com/file/houzing/admin1images/b+(2).png',
  },
};

export default function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
  currency = 'UGX',
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm font-semibold">Select how you'd like to pay:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(PAYMENT_METHODS).map(([methodId, method]) => {
          const isSelected = selectedMethod === methodId;
          const isCardMethod = methodId === 'card';
          const isMobileMoneyMethod = methodId === 'mobile_money';

          return (
            <label
              key={methodId}
              className={`relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-rose-400 bg-rose-400/15 shadow-lg shadow-rose-400/20'
                  : 'border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={methodId}
                checked={isSelected}
                onChange={() => onMethodChange(methodId as PaymentMethodType)}
                className="w-5 h-5 cursor-pointer"
              />

              <h3 className="text-white font-semibold text-center">{method.name}</h3>

              <div className="flex items-center justify-center gap-3 h-14 w-full">
                {isCardMethod && (
                  <div className="bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-center h-full min-w-0 flex-1">
                    <img
                      src={methodImages.card}
                      alt="Visa, Mastercard and other cards"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                )}

                {isMobileMoneyMethod && (
                  <>
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-center h-full flex-1 min-w-0">
                      <img
                        src={methodImages.mobile_money.main}
                        alt="Mobile money providers"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-center h-full flex-1 min-w-0">
                      <img
                        src={methodImages.mobile_money.mpesa}
                        alt="M-Pesa"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </>
                )}

                {methodId === 'express_pay' && (
                  <>
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-center h-full flex-1 min-w-0">
                      <img
                        src={methodImages.express_pay.paypal}
                        alt="PayPal"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-center h-full flex-1 min-w-0">
                      <img
                        src={methodImages.express_pay.googlePay}
                        alt="Google Pay"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white/10 backdrop-blur p-2 rounded-lg flex items-center justify-center h-full flex-1 min-w-0">
                      <img
                        src={methodImages.express_pay.applePay}
                        alt="Apple Pay"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </>
                )}
              </div>

              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}
