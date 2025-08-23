import Stripe from 'stripe'
import { Request } from 'express'
import { UsageCacheManager } from './UsageCacheManager'
import { UserPlan } from './Interface'
import { LICENSE_QUOTAS } from './utils/constants'

export class StripeManager {
    private static instance: StripeManager
    private stripe?: Stripe
    private cacheManager: UsageCacheManager

    publ: Promise<StripeManager> {
         {
            St
            awa
        }
        return StripeManager.instance
    }

    p {
         {
            th
        }
        th
    }

    publ {
         th
        return this.stripe
    }

    publ {
        return {
            customer: subscription.customer,
            status: subscription.status,
            created: subscription.created
        }
    }

    publ {
         {
            th
        }

        
         {
            return subscriptionData.productId
        }

        try {
            
            const items = subscription.items.data
             {
                return ''
            }

            const productId = items[0].price.product as string
            await this.cacheManager.updateSubscriptionDataToCache(subscriptionId, {
                productId,
                
            })

            return productId
        }  {
            
            throw error
        }
    }

    publ {
         {
            return {}
        }

         {
            
             {
                return subscriptionData.features
            }
        }

        const subscription = await this.stripe.subscriptions.retrieve(subscriptionId, {
            timeout: 5000
        })
        const items = subscription.items.data
         {
            return {}
        }

        const productId = items[0].price.product as string
        const product = await this.stripe.products.retrieve(productId, {
            timeout: 5000
        })
        const productMetadata = product.metadata

        .length === 0) {
            return {}
        }

        const features: Record<string, string> = {}
        f {
            ) {
                features[key] = productMetadata[key]
            }
        }

        await this.cacheManager.updateSubscriptionDataToCache(subscriptionId, {
            features,
            
        })

        return features
    }

    publ {
         {
            th
        }

        const customerId = req.user?.activeOrganizationCustomerId
         {
            th
        }

        const subscriptionId = req.user?.activeOrganizationSubscriptionId
         {
            th
        }

        try {
            
            

            const portalSession = await this.stripe.billingPortal.sessions.create({
                customer: customerId,
                configuration: configuration.id,
                return_url: `${process.env.APP_URL}/account`
                /* We can't have flow_data because it does not support multiple subscription items
                flow_data: {
                    type: 'subscription_update',
                    subscription_update: {
                        subscription: subscriptionId
                    },
                    after_completion: {
                        type: 'redirect',
                        redirect: {
                            return_url: `${process.env.APP_URL}/account/subscription?subscriptionId=${subscriptionId}`
                        }
                    }
                }*/
            })

            return { url: portalSession.url }
        }  {
            
            throw error
        }
    }

    p {
        const prodPriceIds: Record<string, { product: string; price: string }> = {
            [UserPlan.STARTER]: {
                product: process.env.CLOUD_STARTER_ID as string,
                price: ''
            },
            [UserPlan.PRO]: {
                product: process.env.CLOUD_PRO_ID as string,
                price: ''
            },
            [UserPlan.FREE]: {
                product: process.env.CLOUD_FREE_ID as string,
                price: ''
            },
            SEAT: {
                product: process.env.ADDITIONAL_SEAT_ID as string,
                price: ''
            }
        }

        f {
            const prices = await this.stripe!.prices.list({
                product: prodPriceIds[key].product,
                active: true,
                limit: 1
            })

             {
                prodPriceIds[key].price = prices.data[0].id
            }
        }

        return prodPriceIds
    }

    p {
        return await this.stripe!.billingPortal.configurations.create({
            business_profile: {
                privacy_policy_url: `${process.env.APP_URL}/privacy-policy`,
                terms_of_service_url: `${process.env.APP_URL}/terms-of-service`
            },
            features: {
                invoice_history: {
                    enabled: true
                },
                payment_method_update: {
                    enabled: true
                },
                subscription_cancel: {
                    enabled: false
                }
                /*subscription_update: {
                    enabled: false,
                    default_allowed_updates: ['price'],
                    products: [
                        {
                            product: prodPriceIds[UserPlan.FREE].product,
                            prices: [prodPriceIds[UserPlan.FREE].price]
                        },
                        {
                            product: prodPriceIds[UserPlan.STARTER].product,
                            prices: [prodPriceIds[UserPlan.STARTER].price]
                        },
                        {
                            product: prodPriceIds[UserPlan.PRO].product,
                            prices: [prodPriceIds[UserPlan.PRO].price]
                        }
                    ],
                    proration_behavior: 'always_invoice'
                }*/
            }
        })
    }

    publ: Promise<{ quantity: number; includedSeats: number }> {
         {
            th
        }

        try {
            
            const additionalSeatsItem = subscription.items.data.find(
                ( => ( === process.env.ADDITIONAL_SEAT_ID
            )
            

            return { quantity: additionalSeatsItem?.quantity || 0, includedSeats: quotas[LICENSE_QUOTAS.USERS_LIMIT] }
        }  {
            
            throw error
        }
    }

    publ {
         {
            th
        }

        try {
            const customer = (await this.stripe.customers.retrieve(customerId, {
                expand: ['default_source', 'invoice_settings.default_payment_method']
            })) as Stripe.Customer

            return customer
        }  {
            
            throw error
        }
    }

    publ {
         {
            th
        }

        try {
            

            // Get customer's credit balance
            
            .balance // Balance is in cents, negative for credit, positive for amount owed

            // Get the 
             => ( 
            const basePlanAmount = basePlanItem ? basePlanItem.price.unit_amount! * 1 : 0

            const existingInvoice = await this.stripe.invoices.retrieveUpcoming({
                customer: subscription.customer as string,
                subscription: subscriptionId
            })

            const existingInvoiceTotal = existingInvoice.total

            // Get the price ID for additional seats
            const prices = await this.stripe.prices.list({
                product: process.env.ADDITIONAL_SEAT_ID,
                active: true,
                limit: 1
            })

             {
                th
            }

            const seatPrice = prices.data[0]
            const pricePerSeat = seatPrice.unit_amount || 0

            // Use current timestamp for proration calculation
             / 1000)

            const additionalSeatsItem = subscription.items.data.find(
                ( => ( === process.env.ADDITIONAL_SEAT_ID
            )

            const upcomingInvoice = await this.stripe.invoices.retrieveUpcoming({
                customer: subscription.customer as string,
                subscription: subscriptionId,
                subscription_details: {
                    proration_behavior: 'always_invoice',
                    proration_date: prorationDate,
                    items: [
                        additionalSeatsItem
                            ? {
                                  id: additionalSeatsItem.id,
                                  quantity: quantity
                              }
                            : {
                                  // If the item doesn't exist yet, create a new one
                                  // This will be used to calculate the proration amount
                                  price: prices.data[0].id,
                                  quantity: quantity
                              }
                    ]
                }
            })

            // Calculate proration amount from the relevant line items
            // Only consider prorations that match our proration date
            const prorationLineItems = upcomingInvoice.lines.data.filter(
                (l => line.type === 'invoiceitem' && line.period.start === prorationDate
            )

             => t

            return {
                basePlanAmount: basePlanAmount / 100,
                a / 100,
                seatPerUnitPrice: pricePerSeat / 100,
                prorationAmount: prorationAmount / 100,
                creditBalance: creditBalance / 100,
                nextInv / 100,
                ,
                prorationDate,
                currentPeriodStart: subscription.current_period_start,
                currentPeriodEnd: subscription.current_period_end
            }
        }  {
            
            throw error
        }
    }

    publ {
         {
            th
        }

        try {
            
            const additionalSeatsItem = subscription.items.data.find(
                ( => ( === process.env.ADDITIONAL_SEAT_ID
            )

            // Get the price ID for additional seats if needed
            const prices = await this.stripe.prices.list({
                product: process.env.ADDITIONAL_SEAT_ID,
                active: true,
                limit: 1
            })

             {
                th
            }

            // Create an invoice immediately for the proration
            const updatedSubscription = await this.stripe.subscriptions.update(subscriptionId, {
                items: [
                    additionalSeatsItem
                        ? {
                              id: additionalSeatsItem.id,
                              quantity: quantity
                          }
                        : {
                              price: prices.data[0].id,
                              quantity: quantity
                          }
                ],
                proration_behavior: 'always_invoice',
                proration_date: prorationDate
            })

            // Get the latest invoice for this subscription
            const invoice = await this.stripe.invoices.list({
                subscription: subscriptionId,
                limit: 1
            })

             {
                const latestInvoice = invoice.data[0]
                // Only try to pay if the invoice is not already paid
                 {
                    awa
                }
            }

            return {
                success: true,
                subscription: updatedSubscription,
                invoice: invoice.data[0]
            }
        }  {
            
            throw error
        }
    }

    publ {
         {
            th
        }

        try {
            
            const customerId = subscription.customer as string

            // Get customer's credit balance and metadata
            
            .balance
            .metadata || {}

            // Get the price ID for the new plan
            const prices = await this.stripe.prices.list({
                product: newPlanId,
                active: true,
                limit: 1
            })

             {
                th
            }

            const newPlan = prices.data[0]
            const newPlanPrice = newPlan.unit_amount || 0

            // Check if this is the STARTER plan and eligible for first month free
            const isStarterPlan = newPlanId === process.env.CLOUD_STARTER_ID
            const hasUsedFirstMonthFreeCoupon = customerMetadata.has_used_first_month_free === 'true'
            const eligibleForFirstMonthFree = isStarterPlan && !hasUsedFirstMonthFreeCoupon

            // Use current timestamp for proration calculation
             / 1000)

            const upcomingInvoice = await this.stripe.invoices.retrieveUpcoming({
                customer: customerId,
                subscription: subscriptionId,
                subscription_details: {
                    proration_behavior: 'always_invoice',
                    proration_date: prorationDate,
                    items: [
                        {
                            id: subscription.items.data[0].id,
                            price: newPlan.id
                        }
                    ]
                }
            })

            let p => t
             {
                prorationAmount = 0
            }

            return {
                newPlanAmount: newPlanPrice / 100,
                prorationAmount: prorationAmount / 100,
                creditBalance: creditBalance / 100,
                ,
                prorationDate,
                currentPeriodStart: subscription.current_period_start,
                currentPeriodEnd: subscription.current_period_end,
                eligibleForFirstMonthFree
            }
        }  {
            
            throw error
        }
    }

    publ {
         {
            th
        }

        try {
            
            const customerId = subscription.customer as string

            // Get customer details and metadata
            
            .metadata || {}

            // Get the price ID for the new plan
            const prices = await this.stripe.prices.list({
                product: newPlanId,
                active: true,
                limit: 1
            })

             {
                th
            }

            const newPlan = prices.data[0]
            let updatedSubscription: Stripe.Response<Stripe.Subscription>

            // Check if this is an upgrade to CLOUD_STARTER_ID and eligible for first month free
            const isStarterPlan = newPlanId === process.env.CLOUD_STARTER_ID
            const hasUsedFirstMonthFreeCoupon = customerMetadata.has_used_first_month_free === 'true'

             {
                // Create the one-time 100% off coupon
                const coupon = await this.stripe.coupons.create({
                    duration: 'once',
                    percent_off: 100,
                    max_redemptions: 1,
                    metadata: {
                        type: 'first_month_free',
                        customer_id: customerId,
                        plan_id: process.env.CLOUD_STARTER_ID || ''
                    }
                })

                // Create a promotion code linked to the coupon
                const promotionCode = await this.stripe.promotionCodes.create({
                    coupon: coupon.id,
                    max_redemptions: 1
                })

                // Update the subscription with the new plan and apply the promotion code
                updatedSubscription = await this.stripe.subscriptions.update(subscriptionId, {
                    items: [
                        {
                            id: subscription.items.data[0].id,
                            price: newPlan.id
                        }
                    ],
                    proration_behavior: 'always_invoice',
                    proration_date: prorationDate,
                    promotion_code: promotionCode.id
                })

                // Update customer metadata to mark the coupon as used
                await this.stripe.customers.update(customerId, {
                    metadata: {
                        ...customerMetadata,
                        has_used_first_month_free: 'true',
                        f.t
                    }
                })
            } else {
                // Regular plan update without coupon
                updatedSubscription = await this.stripe.subscriptions.update(subscriptionId, {
                    items: [
                        {
                            id: subscription.items.data[0].id,
                            price: newPlan.id
                        }
                    ],
                    proration_behavior: 'always_invoice',
                    proration_date: prorationDate
                })
            }

            // Get and pay the latest invoice
            const invoice = await this.stripe.invoices.list({
                subscription: subscriptionId,
                limit: 1
            })

             {
                const latestInvoice = invoice.data[0]
                 {
                    awa
                }
            }

            return {
                success: true,
                subscription: updatedSubscription,
                invoice: invoice.data[0]
            }
        }  {
            
            throw error
        }
    }
}
