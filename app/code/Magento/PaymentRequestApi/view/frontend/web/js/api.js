/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([], function () {
    'use strict';

    if(!window.PaymentRequest) {
        alert('Payment Request API is not supported.');
    }
    var supportedPaymentMethods = [
        {
            supportedMethods: 'basic-card'
        }
    ];
    var paymentDetails = {
        total: {
            label: 'Total',
            amount:{
                currency: 'USD',
                value: 0
            }
        }
    };

    return function () {
        return new PaymentRequest(supportedPaymentMethods, paymentDetails);
    }
});