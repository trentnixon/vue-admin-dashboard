import { computed } from "vue";
import { usePrivateOrdersState } from "./private";
import { addDays, format, isBefore, parseISO } from "date-fns";

export const orders = computed(() => usePrivateOrdersState().orders);
export const accountOrders = computed(
  () => usePrivateOrdersState().accountOrders
);
export const selectedAccountOrders = computed(
  () => usePrivateOrdersState().selectedAccountOrders
);
export const loading = computed(() => usePrivateOrdersState().loading);
export const error = computed(() => usePrivateOrdersState().error);

export const orderCount = computed(() => orders.value.length);
export const accountOrderCount = computed(() => accountOrders.value.length);
export const activeOrders = computed(() =>
  orders.value.filter((order) => order.attributes.isActive)
);
export const activeOrderCount = computed(() => activeOrders.value.length);

export const firstTenOrders = computed(() => orders.value.slice(0, 10));
export const getOrderById = (id: number) => {
  return orders.value.find((order) => order.id === id) || null;
};

export const calculateTotalRevenue = computed(() => {
  const allOrders = orders.value;
  console.log("allOrders ", allOrders);
  return allOrders.reduce((total, order) => {
    return total + parseFloat(order.attributes.total);
  }, 0);
});

export const calculateAverageOrderValue = computed(() => {
  const allOrders = orders.value.filter(
    (order) => parseFloat(order.attributes.total) > 0
  );
  if (allOrders.length === 0) return 0;
  const totalRevenue = allOrders.reduce((total, order) => {
    return total + parseFloat(order.attributes.total);
  }, 0);
  return totalRevenue / allOrders.length;
});

//expiringOrders
export const expiringOrders = computed(() => {
  const now = new Date();
  const thresholdDate = addDays(now, 7);

  return orders.value.filter((order) => {
    const endDate = order.attributes.endOrderAt
      ? parseISO(order.attributes.endOrderAt)
      : null;
    return (
      endDate && isBefore(now, endDate) && isBefore(endDate, thresholdDate)
    );
  });
});
export const expiringOrderCount = computed(() => expiringOrders.value.length);

export const subscriptionTierBreakdown = computed(() => {
  console.log("orders.value ", orders.value);
  const tierCounts = orders.value.reduce(
    (acc: Record<string, number>, order) => {
      const tierName =
        order.attributes.subscription_tier?.data?.attributes?.Name ||
        "Free Trial";
      acc[tierName] = (acc[tierName] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const categories = Object.keys(tierCounts);
  const data = Object.values(tierCounts);

  return { categories, data };
});

export const accountOrdersDetails = computed(() => {
  const allOrders = selectedAccountOrders.value;

  const orderDetails = allOrders.map((order) => {
    const { Name, startOrderAt, endOrderAt, total, subscription_tier, isActive } = order.attributes;
    return {
      Name,
      Start: format(new Date(startOrderAt), "yyyy-MM-dd"),
      End: format(new Date(endOrderAt), "yyyy-MM-dd"),
      Value: parseFloat(total),
      SubscriptionTier: subscription_tier?.data?.attributes?.Name || "Unknown",
      isActive
    };
  });

  const totalNum = allOrders.length;
  const totalRevenue = orderDetails.reduce((sum, order) => sum + order.Value, 0);
  const activeOrders = orderDetails.filter((order) => order.isActive);

  const activeOrderDetails = activeOrders.map(order => ({
    Name: order.Name,
    Value: order.Value,
    End: order.End,
    SubscriptionTier: order.SubscriptionTier,
  }));

  return {
    TotalNum: totalNum,
    TotalRevenue: totalRevenue,
    Overview: orderDetails,
    ActiveOrders: activeOrders,
    ActiveOrderDetails: activeOrderDetails.length > 0 ? activeOrderDetails[0] : null
  };
});
