import ComingSoon from "@/components/coming-soon";

export const subscriptions = {
  path: 'subscriptions',
  children: [
    { index: true, Component: ComingSoon },
    { path: 'expiring-soon-subscriptions', Component: ComingSoon },
    { path: 'expired-subscriptions', Component: ComingSoon },
  ]
}

export const SUBSCRIPTION_ROUTES = {
  INDEX: "/ophir/subscriptions",
  EXPIRING_SOON_SUBSCRIPTIONS: "/ophir/subscriptions/expiring-soon-subscriptions",
  EXPIRED_SUBSCRIPTIONS: "/ophir/subscriptions/expired-subscriptions",
};