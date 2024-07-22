import { computed } from "vue";
import { usePrivateAccountState } from "./private";
import { format } from "date-fns";
export const accounts = computed(() => usePrivateAccountState().accounts);
export const accountDetails = computed(
  () => usePrivateAccountState().accountDetails
);
export const selectedAccount = computed(
  () => usePrivateAccountState().selectedAccount
);
export const loading = computed(() => usePrivateAccountState().loading);
export const error = computed(() => usePrivateAccountState().error);

export const accountCount = computed(() => accounts.value.length);
export const firstTenAccounts = computed(() => accounts.value.slice(0, 10));

export const getAccountById = (id: number) => {
  return accounts.value.find((account) => account.id === id) || null;
};

export const accountRelationalData = computed(() => {
  return accountDetails.value ? accountDetails.value.attributes : null;
});

export const getAccountType = computed(() => {
  return accountDetails.value
    ? accountDetails.value.attributes.account_type?.data.attributes.Name
    : null;
});

export const getAccountRenderToken = computed(() => {
  return accountDetails.value
    ? accountDetails.value.attributes.render_token?.data.attributes
    : null;
});

export const getAccountTemplate = computed(() => {
  return accountDetails.value
    ? accountDetails.value.attributes.template?.data.attributes
    : null;
});

export const getAccountTheme = computed(() => {
  return accountDetails.value
    ? accountDetails.value.attributes.theme?.data.attributes
    : null;
});

export const getAccountTrialInstance = computed(() => {
  return accountDetails.value
    ? accountDetails.value.attributes.trial_instance?.data.attributes
    : null;
});

export const getAccountSubscription = computed(() => {
  return accountDetails.value
    ? accountDetails.value.attributes.subscription_tier?.data
    : null;
});

export const getOrganizationDetails = computed(() => {
  if (!accountDetails.value) return null;

  const accountType = getAccountType.value;
  const associations = accountDetails.value.attributes.associations?.data;
  const clubs = accountDetails.value.attributes.clubs?.data;

  if (
    accountType === "Association" &&
    associations &&
    associations.length > 0
  ) {
    return {
      type: "Association",
      id: associations[0].id,
    };
  } else if (accountType === "Club" && clubs && clubs.length > 0) {
    return {
      type: "Club",
      id: clubs[0].id,
    };
  } else {
    return null;
  }
});

export const activeOrderRatio = computed(() => {
  const state = usePrivateAccountState();

  const accountsWithOrders = state.accounts.filter((account) => {
    return account.attributes?.orders?.data.some(
      (order) => order.attributes.isActive
    );
  });

  const accountsWithoutOrders =
    state.accounts.length - accountsWithOrders.length;

  return [
    { name: "Has Active Order", value: accountsWithOrders.length },
    { name: "No Active Order", value: accountsWithoutOrders },
  ];
});

export const freeTrialStatus = computed(() => {
  const state = usePrivateAccountState();

  const completeFreeTrial = state.accounts.filter(
    (account) =>
      account.attributes.trial_instance?.data?.attributes &&
      !account.attributes.trial_instance.data.attributes.isActive
  ).length;

  const onFreeTrial = state.accounts.filter(
    (account) => account.attributes.trial_instance?.data?.attributes?.isActive
  ).length;

  const yetToStart = state.accounts.filter(
    (account) => !account.attributes.trial_instance?.data?.attributes
  ).length;

  return [
    { name: "Complete Free Trial", value: completeFreeTrial },
    { name: "On Free Trial", value: onFreeTrial },
    { name: "Yet to Start", value: yetToStart },
  ];
});

export const accountTypeSplit = computed(() => {
  const state = usePrivateAccountState();

  const clubs = state.accounts.filter(
    (account) =>
      account.attributes.account_type?.data?.attributes?.Name === "Club"
  ).length;
  const associations = state.accounts.filter(
    (account) =>
      account.attributes.account_type?.data?.attributes?.Name === "Association"
  ).length;

  return [
    { name: "Club", value: clubs },
    { name: "Association", value: associations },
  ];
});

export const accountSignUpTrend = computed(() => {
  const state = usePrivateAccountState();
  const accounts = state.accounts;

  // Initialize an array with 12 months
  const months = Array.from({ length: 12 }, (_, index) =>
    format(new Date(2020, index), "MMM")
  );

  // Initialize an array to hold sign-ups per month
  const signUpsPerMonth = Array(12).fill(0);

  // Iterate over accounts to count sign-ups per month
  accounts.forEach((account) => {
    if (account.attributes.publishedAt) {
      const month = new Date(account.attributes.publishedAt).getMonth();
      signUpsPerMonth[month]++;
    }
  });

  return {
    categories: months,
    data: signUpsPerMonth,
  };
});

export const sportsDistribution = computed(() => {
  const state = usePrivateAccountState();
  const sportCounts = state.accounts.reduce((acc, account) => {
    const sport = account.attributes.Sport;
    if (sport) {
      acc[sport] = (acc[sport] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.keys(sportCounts);
  const data = Object.values(sportCounts);

  return { categories, data };
});

export const templateRatioSplit = computed(() => {
  const state = usePrivateAccountState();
  const templates = state.accounts
    .map((account) => account.attributes.template?.data?.attributes?.Name)
    .filter(Boolean); // Filter out undefined or null values

  const templateCounts = templates.reduce((acc, template) => {
    if (template) {
      acc[template] = (acc[template] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.keys(templateCounts);
  const data = Object.values(templateCounts);
  return { categories, data };
});

export const accountsOnFreeTrial = computed(() => {
  const state = usePrivateAccountState();

  return state.accounts.filter(
    (account) => account.attributes.trial_instance?.data?.attributes?.isActive
  );
});

export const sponsorsStatus = computed(() => {
  const state = usePrivateAccountState();
  const accountsWithSponsors = state.accounts.filter((account) => {
    return (
      account.attributes.sponsors &&
      Array.isArray(account.attributes.sponsors.data) &&
      account.attributes.sponsors.data.length > 0
    );
  }).length;

  const accountsWithoutSponsors = state.accounts.length - accountsWithSponsors;

  return [
    { name: "With Sponsors", value: accountsWithSponsors },
    { name: "Without Sponsors", value: accountsWithoutSponsors },
  ];
});

export const totalSponsors = computed(() => {
  const state = usePrivateAccountState();
  let SponsorCount = 0;

  state.accounts.forEach((account) => {
    if (account.attributes.sponsors && Array.isArray(account.attributes.sponsors.data)) {
      SponsorCount += account.attributes.sponsors.data.length;
    }
  });

  return SponsorCount;
});

export const averageSponsorsPerAccount = computed(() => {
  const state = usePrivateAccountState();
  const totalAccounts = state.accounts.length;
  if (totalAccounts === 0) return 0;
  return totalSponsors.value / totalAccounts;
});
