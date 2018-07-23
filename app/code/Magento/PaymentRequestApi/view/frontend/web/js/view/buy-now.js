/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'uiComponent',
    'Magento_PaymentRequestApi/js/payment-request-factory'
], function ($, Component, PaymentRequest) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magento_PaymentRequestApi/buy-now'
        },

        /**
         * Checks id Payment Request API is available
         * @returns {Boolean}
         */
        isAvailable: function () {

            // eslint-disable-next-line
            // @TODO should check availability from PaymentRequest
            return true;
        },

        /**
         * Handler for `Buy Now` button
         */
        buyNow: function () {
            PaymentRequest().show()
                .then(function (paymentResponse) {
                    console.log(paymentResponse);

                    // eslint-disable-next-line
                    // @TODO return fail for testing purposes
                    return paymentResponse.complete('fail');
                })
                .catch(function (error) {
                    switch (error.name) {
                        case 'AbortError':
                            console.log('Payment Request dialog was closed by user: ' + error.message);
                            break;

                        case 'InvalidStateError':
                            console.error('Invalid Payment Request state: ' + error.message);
                            break;

                        default:
                            console.error(error);
                    }
                });
        }
    });
});
