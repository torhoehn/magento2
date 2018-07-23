/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([], function () {
    'use strict';

    var supportedPaymentMethods = [
            {
                supportedMethods: 'basic-card'
            }
        ],
        paymentDetails = {
            total: {
                label: 'Total',
                amount: {
                    currency: 'USD',
                    value: 0
                }
            }
        };

    if (!window.PaymentRequest) {
        alert('Payment Request API is not supported.'); // eslint-disable-line no-alert
    }

    return function () {

        return new PaymentRequest(supportedPaymentMethods, paymentDetails);
    };
});
